import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import amfLogo from "@/assets/amf-logo.png";

const RegistrationConfirmed = () => {
  useEffect(() => {
    document.title = "Registration Confirmed | Bridge 2026";
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--navy-deep))] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        <img
          src={amfLogo}
          alt="Autism Meets Faith"
          width={64}
          height={64}
          className="mx-auto h-16 w-16 rounded-full bg-white p-1 shadow-md ring-1 ring-white/20"
        />
        <p className="mt-6 text-gold text-xs font-semibold uppercase tracking-[0.25em]">
          Bridge 2026
        </p>
        <CheckCircle2 className="mx-auto mt-6 h-14 w-14 text-gold" aria-hidden="true" />
        <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white">
          Registration Confirmed
        </h1>
        <p className="mt-4 text-white/80 leading-relaxed">
          Thank you for registering for Bridge 2026.
        </p>
        <p className="mt-2 text-white/80 leading-relaxed">
          We look forward to welcoming you on November 7, 2026 at the Hyatt Regency
          Baytown–Houston.
        </p>
        <p className="mt-6 text-sm text-white/60">
          You may now close this page or return to the Bridge 2026 website.
        </p>
        <Button asChild variant="hero" className="mt-8">
          <Link to="/">Return to Bridge 2026</Link>
        </Button>
      </div>
    </div>
  );
};

export default RegistrationConfirmed;
