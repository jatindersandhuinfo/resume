import Image from 'next/image';
import { contact } from '@/lib/data';
import { SectionTitle } from './SectionTitle';

const contactItems = [
  { key: 'Email', val: contact.email, href: `mailto:${contact.email}` },
  { key: 'Website', val: contact.website, href: `https://${contact.website}` },
  { key: 'Phone', val: contact.phone, href: `tel:${contact.phone}` },
  { key: 'LinkedIn', val: 'in/jatindersandhuinfo', href: contact.linkedin },
  { key: 'GitHub', val: 'jatindersandhuinfo', href: contact.github },
  { key: 'Location', val: 'Bathinda, Punjab, India', href: undefined },
];

export function ContactSection() {
  return (
    <section aria-label="Contact Information" className="mt-auto">
      <SectionTitle variant="light">Contact</SectionTitle>
      <div className="grid grid-cols-2 gap-2">
        {contactItems.map(({ key, val, href }) => (
          <div key={key} className="text-[11px]">
            <p className="font-mono text-[9px] uppercase text-[#aaa] mb-0.5">{key}</p>
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-semibold text-[#111] hover:text-[#ff990a] transition-colors duration-200 break-all text-[11px]"
              >
                {val}
              </a>
            ) : (
              <p className="font-semibold text-[#111] break-all text-[11px]">{val}</p>
            )}
          </div>
        ))}
      </div>

      {/* QR Code */}
      <div className="flex items-center gap-2.5 mt-3">
        <Image
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${contact.website}/`}
          alt="QR code linking to Jatinder Sandhu portfolio"
          width={48}
          height={48}
          className="border border-[#ddd] p-0.5"
          unoptimized
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#999]">
          Scan for
          <br />
          Portfolio
        </p>
      </div>
    </section>
  );
}
