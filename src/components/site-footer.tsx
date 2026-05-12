const LOGO = "https://www.friggp2c.com/wp-content/uploads/2023/10/MicrosoftTeams-image.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <div className="bg-white inline-block p-2 rounded-md">
              <img src={LOGO} alt="Frigg Business Solutions" className="h-13 w-auto object-contain" style={{ height: 52 }} />
            </div>
            <p className="text-[13px] text-white/60 mt-3">Driving Perception To Conclusion</p>
            <div className="text-[13px] text-white/80 leading-[2] mt-4">
              <div>+1 (905) 261-9123 (Canada)</div>
              <div>+1 (866) 907-7227 (USA)</div>
              <div>service@friggp2c.com</div>
              <div>friggp2c.com</div>
            </div>
          </div>

          {/* Center */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.1em] font-bold text-accent">
              QUICK LINKS
            </div>
            <ul className="mt-4 text-[13px] text-white/80 leading-[2.2]">
              {["Services", "How It Works", "Our Experts", "Results", "Contact", "Privacy Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <a href="#contact" className="btn-on-dark !py-3 !px-6 !text-[14px]">
              Book Free Assessment
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-white/50">
          <div>© 2025 Frigg Business Solutions. USA | Canada | India | UAE. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
