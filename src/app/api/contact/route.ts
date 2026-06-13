import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  console.log('=== CONTACT FORM SUBMITTED ===')
  try {
    const body = await request.json()
    const { service_type, name, email, subject, message } = body
    console.log('Received data:', { service_type, name, email, subject, message })

    // Validate request
    if (!service_type || !name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      service_type: service_type.trim(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    }

    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    // Initialize clients only if env vars are present
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    const resendApiKey = process.env.RESEND_API_KEY || ''

    console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set')
    console.log('Supabase Service Key:', supabaseServiceKey ? 'Set' : 'Not set')
    console.log('Resend API Key:', resendApiKey ? 'Set' : 'Not set')

    let supabase = null
    let resend = null

    if (supabaseUrl && supabaseServiceKey) {
      const { createClient } = await import('@supabase/supabase-js')
      supabase = createClient(supabaseUrl, supabaseServiceKey)
    }

    if (resendApiKey) {
      const { Resend } = await import('resend')
      resend = new Resend(resendApiKey)
    }

    // 1. Save to Supabase (if available)
    if (supabase) {
      console.log('Saving to Supabase...')
      const { error: supabaseError } = await supabase
        .from('contact_requests')
        .insert(sanitizedData)

      if (supabaseError) {
        console.error('Supabase insertion error:', JSON.stringify(supabaseError, null, 2))
      } else {
        console.log('✅ Contact request saved to Supabase successfully!')
      }
    } else {
      console.log('⚠️ Supabase not configured, skipping DB save.')
    }

    // 2. Send email via Resend (if available)
    if (resend) {
      console.log('Sending email via Resend...')
      const { data, error: resendError } = await resend.emails.send({
    from: 'Bharat Titan Contact <contact@bharattitan.com>',
    to: ['bharattitanofficial@gmail.com'],
        subject: `New Contact Request: ${sanitizedData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ff5000;">New Contact Request Received</h2>
            <hr style="border: 1px solid #eee;">
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.service_type}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedData.subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px;">${sanitizedData.message.replace(/\n/g, '<br>')}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-top: 1px solid #eee; font-weight: bold;">Submission Time:</td>
                <td style="padding: 10px; border-top: 1px solid #eee;">${submissionTime}</td>
              </tr>
            </table>
          </div>
        `
      })

      if (resendError) {
        console.error('❌ Resend email error:', JSON.stringify(resendError, null, 2))
      } else {
        console.log('✅ Email sent successfully! Resend data:', data)
      }
    } else {
      console.log('⚠️ Resend not configured, skipping email send.')
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error: any) {
    console.error('❌ Contact API error:', JSON.stringify(error, null, 2))
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
