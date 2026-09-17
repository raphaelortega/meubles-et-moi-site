import { NextResponse } from 'next/server';
import { LeadFormData } from '@/types';

// Adresses de notification (surchargées par NOTIFICATION_EMAILS ou NOTIFICATION_EMAIL dans .env.local si renseigné)
const envRecipients = process.env.NOTIFICATION_EMAILS || process.env.NOTIFICATION_EMAIL;

const DEFAULT_RECIPIENTS = [
  'r.ortega@meubles-et-moi.fr',
];

const NOTIFICATION_RECIPIENTS = envRecipients
  ? envRecipients.split(',').map((e) => e.trim()).filter(Boolean)
  : DEFAULT_RECIPIENTS;

export async function POST(request: Request) {
  try {
    const lead: LeadFormData = await request.json();

    // Validation minimale
    if (!lead.prenom || !lead.telephone || !lead.email) {
      return NextResponse.json(
        { success: false, error: 'Prénom, téléphone et email sont obligatoires.' },
        { status: 400 }
      );
    }

    const nowFormatted = new Date().toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const subject = `🔔 Nouveau projet devis : ${lead.prenom} ${lead.nom || ''} • ${lead.type_bien || 'Logement'} (${lead.surface_m2 || '?'} m²) à ${lead.ville || 'Lyon'}`;

    // Modèle HTML soigné aux couleurs de Meubles&moi (#063B39 et #C55D45)
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F9F6F0; color: #063B39; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #e8e4dc; }
          .header { background-color: #063B39; padding: 28px 32px; color: #ffffff; text-align: left; }
          .badge { display: inline-block; background-color: #C55D45; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; rounded-radius: 12px; border-radius: 12px; margin-bottom: 12px; }
          .title { font-size: 22px; font-weight: 800; margin: 0; color: #ffffff; letter-spacing: -0.5px; }
          .content { padding: 32px; }
          .section-title { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 800; color: #C55D45; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #f0ede6; padding-bottom: 8px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 10px 0; font-size: 14px; border-bottom: 1px solid #f5f2eb; vertical-align: top; }
          .info-table td.label { font-weight: 700; color: #063B39; width: 38%; }
          .info-table td.value { color: #2c3e50; }
          .highlight-box { background-color: #F9F6F0; border-left: 4px solid #C55D45; padding: 16px 20px; border-radius: 0 12px 12px 0; margin-bottom: 24px; }
          .highlight-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #063B39; }
          .btn-group { margin-top: 24px; text-align: center; }
          .btn { display: inline-block; background-color: #C55D45; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 13px; margin-right: 8px; }
          .btn-secondary { background-color: #063B39; }
          .footer { background-color: #FAF8F5; padding: 20px 32px; text-align: center; font-size: 11px; color: #7f8c8d; border-top: 1px solid #f0ede6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">Nouvelle Demande de Devis</div>
            <h1 class="title">Meubles&moi • Ameublement clé en main</h1>
          </div>
          
          <div class="content">
            <h2 class="section-title">1. Coordonnées du Prospect</h2>
            <table class="info-table">
              <tr>
                <td class="label">Nom complet</td>
                <td class="value"><strong>${lead.prenom} ${lead.nom || ''}</strong></td>
              </tr>
              <tr>
                <td class="label">Téléphone</td>
                <td class="value"><a href="tel:${lead.telephone}" style="color: #C55D45; font-weight: 700; text-decoration: none;">${lead.telephone}</a></td>
              </tr>
              <tr>
                <td class="label">Adresse Email</td>
                <td class="value"><a href="mailto:${lead.email}" style="color: #063B39; text-decoration: underline;">${lead.email}</a></td>
              </tr>
              <tr>
                <td class="label">Ville / Quartier</td>
                <td class="value">${lead.ville || 'Lyon'}${lead.code_postal ? ` (${lead.code_postal})` : ''}</td>
              </tr>
              <tr>
                <td class="label">Date souhaitée</td>
                <td class="value">${lead.date_souhaitee || 'Dans le mois'}</td>
              </tr>
            </table>

            <h2 class="section-title">2. Détails du Logement & Estimation</h2>
            <table class="info-table">
              <tr>
                <td class="label">Type de bien</td>
                <td class="value"><strong>${lead.type_bien || 'Non renseigné'}</strong></td>
              </tr>
              <tr>
                <td class="label">Surface</td>
                <td class="value"><strong>${lead.surface_m2 || '?'} m²</strong></td>
              </tr>
              <tr>
                <td class="label">Formule / Budget calculé</td>
                <td class="value" style="color: #C55D45; font-weight: 700;">${lead.pack_selectionne || 'Selon grille'}</td>
              </tr>
            </table>

            <h2 class="section-title">3. Souhaits, Ambiance & Équipements</h2>
            <div class="highlight-box">
              <p>${lead.message ? lead.message.replace(/\n/g, '<br>') : 'Aucun détail complémentaire précisé.'}</p>
            </div>

            <div class="btn-group">
              <a href="tel:${lead.telephone}" class="btn">Appeler le prospect (${lead.telephone})</a>
              <a href="mailto:${lead.email}?subject=Votre%20projet%20d%27ameublement%20Meubles%26moi" class="btn btn-secondary">Répondre par Email</a>
            </div>
          </div>

          <div class="footer">
            E-mail généré automatiquement le ${nowFormatted} pour l'équipe Meubles&moi.<br>
            Destinataires : ${NOTIFICATION_RECIPIENTS.join(', ')}
          </div>
        </div>
      </body>
      </html>
    `;

    // 1. Envoi via Resend si clé présente
    let emailProviderSent = false;
    let emailProviderError: string | null = null;

    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'Meubles&moi <contact@meubles-et-moi.fr>',
            to: NOTIFICATION_RECIPIENTS,
            reply_to: lead.email,
            subject,
            html: emailHtml,
          }),
        });

        if (resendRes.ok) {
          const resendData = await resendRes.json();
          emailProviderSent = true;
          console.info(`[Meubles&moi] ✅ E-mail réel envoyé avec succès via Resend (ID: ${resendData.id}) vers:`, NOTIFICATION_RECIPIENTS);
        } else {
          const errData = await resendRes.json();
          emailProviderError = `Resend [${resendRes.status}]: ${JSON.stringify(errData)}`;
          console.error('[Meubles&moi] ❌ Erreur API Resend:', emailProviderError);
        }
      } catch (err: any) {
        emailProviderError = err?.message || 'Erreur réseau Resend';
        console.error('[Meubles&moi] ❌ Exception Resend:', err);
      }
    }

    // 2. Envoi alternatif via Formspree si ID/URL configuré
    if (!emailProviderSent && (process.env.FORMSPREE_URL || process.env.FORMSPREE_ID)) {
      try {
        const formspreeEndpoint = process.env.FORMSPREE_URL || `https://formspree.io/f/${process.env.FORMSPREE_ID}`;
        const formspreeRes = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            _subject: subject,
            nom_complet: `${lead.prenom} ${lead.nom || ''}`.trim(),
            telephone: lead.telephone,
            email: lead.email,
            ville: lead.ville,
            type_bien: lead.type_bien,
            surface_m2: lead.surface_m2,
            pack_selectionne: lead.pack_selectionne,
            date_souhaitee: lead.date_souhaitee,
            message: lead.message,
            destinataires_configures: NOTIFICATION_RECIPIENTS.join(', '),
          }),
        });

        if (formspreeRes.ok) {
          emailProviderSent = true;
          console.info('[Meubles&moi] ✅ E-mail réel envoyé avec succès via Formspree vers les destinataires');
        } else {
          const errData = await formspreeRes.json();
          emailProviderError = `Formspree [${formspreeRes.status}]: ${JSON.stringify(errData)}`;
          console.error('[Meubles&moi] ❌ Erreur Formspree:', emailProviderError);
        }
      } catch (err: any) {
        emailProviderError = err?.message || 'Erreur réseau Formspree';
        console.error('[Meubles&moi] ❌ Exception Formspree:', err);
      }
    }

    // 3. Envoi alternatif via Brevo si clé présente
    if (!emailProviderSent && process.env.BREVO_API_KEY) {
      try {
        const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': process.env.BREVO_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: {
              name: 'Meubles&moi Devis',
              email: process.env.EMAIL_FROM || 'contact@meubles-et-moi.fr',
            },
            to: NOTIFICATION_RECIPIENTS.map((email) => ({ email })),
            replyTo: { email: lead.email, name: `${lead.prenom} ${lead.nom || ''}`.trim() },
            subject,
            htmlContent: emailHtml,
          }),
        });

        if (brevoRes.ok) {
          emailProviderSent = true;
          console.info('[Meubles&moi] ✅ E-mail envoyé avec succès via Brevo à:', NOTIFICATION_RECIPIENTS);
        } else {
          const errData = await brevoRes.json();
          emailProviderError = `Brevo [${brevoRes.status}]: ${JSON.stringify(errData)}`;
          console.error('[Meubles&moi] ❌ Erreur Brevo:', emailProviderError);
        }
      } catch (err: any) {
        emailProviderError = err?.message || 'Erreur Brevo';
        console.error('[Meubles&moi] ❌ Exception Brevo:', err);
      }
    }

    // 4. Envoi alternatif via Web3Forms si clé présente
    if (!emailProviderSent && process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const web3formsRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: subject,
            from_name: 'Meubles&moi Devis',
            name: `${lead.prenom} ${lead.nom || ''}`.trim(),
            email: lead.email,
            phone: lead.telephone,
            city: lead.ville,
            property_type: lead.type_bien,
            surface: `${lead.surface_m2} m²`,
            budget: lead.pack_selectionne,
            message: lead.message || '',
            date: lead.date_souhaitee,
          }),
        });

        const web3formsData = await web3formsRes.json();
        if (web3formsRes.ok && web3formsData.success) {
          emailProviderSent = true;
          console.info('[Meubles&moi] ✅ E-mail envoyé avec succès via Web3Forms à:', NOTIFICATION_RECIPIENTS);
        } else {
          emailProviderError = `Web3Forms: ${web3formsData.message || JSON.stringify(web3formsData)}`;
          console.error('[Meubles&moi] ❌ Erreur Web3Forms:', emailProviderError);
        }
      } catch (err: any) {
        emailProviderError = err?.message || 'Erreur Web3Forms';
        console.error('[Meubles&moi] ❌ Exception Web3Forms:', err);
      }
    }

    // Diagnostic console explicite et transparent
    const hasServiceConfigured = Boolean(
      process.env.RESEND_API_KEY || 
      process.env.BREVO_API_KEY || 
      process.env.FORMSPREE_ID || 
      process.env.FORMSPREE_URL ||
      process.env.WEB3FORMS_ACCESS_KEY
    );

    console.log('\n=============================================');
    console.log('📬 RÉCEPTION D\'UNE ESTIMATION DE DEVIS');
    console.log('---------------------------------------------');
    console.log('Destinataire(s) configuré(s) :', NOTIFICATION_RECIPIENTS.join(', '));
    console.log('Prospect                     :', `${lead.prenom} ${lead.nom || ''} (Tél: ${lead.telephone}, Email: ${lead.email})`);
    console.log('Logement & Surface           :', `${lead.type_bien} (${lead.surface_m2} m²) à ${lead.ville}`);
    console.log('Budget indicatif calculé     :', lead.pack_selectionne);
    console.log('Message / Équipements        :', lead.message);
    console.log('---------------------------------------------');
    if (emailProviderSent) {
      console.log('Statut Envoi E-mail          : ✅ E-MAIL RÉEL EXPÉDIÉ AVEC SUCCÈS');
    } else if (hasServiceConfigured) {
      console.log('Statut Envoi E-mail          : ❌ ÉCHEC DE L\'EXPÉDITION PAR LE FOURNISSEUR');
      console.log('Détail de l\'erreur           :', emailProviderError);
    } else {
      console.log('Statut Envoi E-mail          : ⚠️ SIMULATION LOCALE (AUCUN SERVICE CONFIGURÉ DANS .env.local)');
      console.log('Action requise               : Renseignez RESEND_API_KEY ou FORMSPREE_ID dans .env.local');
    }
    console.log('=============================================\n');

    return NextResponse.json({
      success: true,
      recipients: NOTIFICATION_RECIPIENTS,
      emailDelivered: emailProviderSent,
      hasServiceConfigured,
      diagnostic: emailProviderSent
        ? `E-mail délivré avec succès à : ${NOTIFICATION_RECIPIENTS.join(', ')}`
        : (emailProviderError || 'Aucun fournisseur d\'e-mail actif dans .env.local (simulation console réussie).'),
    });
  } catch (error: any) {
    console.error('[Meubles&moi API] Erreur globale:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Erreur interne lors du traitement.' },
      { status: 500 }
    );
  }
}
