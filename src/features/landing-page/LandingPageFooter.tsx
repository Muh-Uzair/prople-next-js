import React from "react";

const LandingPageFooter: React.FC = () => {
  return (
    <footer className="bg-brand-color-950 text-white">
      <div className="tab:px-[50px] tab:py-[50px] mx-auto flex w-full max-w-[1200px] flex-col gap-[40px] px-[20px] py-[40px] md:flex-row md:justify-between">
        {/* Column 1: Brand */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-bold text-white">PROPLE</h2>
          <p className="mt-3 text-sm text-gray-300">
            Your smart solution for managing multi-purpose buildings. Simplify
            rent, rooms, and residents—all in one place.
          </p>
        </div>

        {/* Column 2: Features */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Features</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Property Dashboard</a>
            </li>
            <li>
              <a href="#">Tenant Management</a>
            </li>
            <li>
              <a href="#">Payment Tracking</a>
            </li>
            <li>
              <a href="#">Maintenance Requests</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">About PROPLE</a>
            </li>
            <li>
              <a href="#">Join Our Team</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">User Guide</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 py-[20px] text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PROPLE. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingPageFooter;
