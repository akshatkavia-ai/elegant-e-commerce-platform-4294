import React from 'react';
import './payment-1-11-933.css';

/**
 * PUBLIC_INTERFACE
 * PaymentScreen
 * This component reconstructs the static Figma export at assets/payment-1-11-933.html
 * using the same class names and absolute positioning. It relies on src/figma-common.css
 * and src/figma-common-fallback.css (imported globally in index.js) to provide tokens,
 * typography, and style helpers. Images are referenced via /assets/figmaimages path.
 */
// PUBLIC_INTERFACE
function PaymentScreen() {
  return (
    <div className="screen style-0" role="main" aria-label="payment 1 screen">
      {/* Status Bar */}
      <div className="abs" style={{ left: 0, top: 0, width: 375, height: 44 }}>
        {/* Time (9:41) */}
        <div className="abs" style={{ left: 19.894, top: 14, width: 54, height: 18 }}>
          <div className="typo-31" style={{ width: 54, height: 18 }}>9:41</div>
        </div>
        {/* Right icons */}
        <div className="abs" style={{ left: 307, top: 16, width: 67, height: 11.5 }}>
          {/* Battery */}
          <div className="abs" style={{ left: 43, top: 0, width: 24.5, height: 11.5 }}>
            <div className="abs style-2" style={{ left: 0, top: 0, width: 24.5, height: 11.5 }}>
              <img
                alt="battery-shape-1"
                className="abs img-contain"
                style={{ left: 1, top: 1, width: 20, height: 9.5 }}
                src="/assets/figmaimages/figma_image_11_945.png"
              />
              <img
                alt="battery-shape-2"
                className="abs img-contain"
                style={{ left: 0, top: 0, width: 22, height: 11.5 }}
                src="/assets/figmaimages/figma_image_11_946.png"
              />
              <div
                className="abs"
                style={{ left: 23.5, top: 3.69, width: 1.5, height: 4, background: 'var(--color-000000)' }}
              />
            </div>
            {/* Battery fill */}
            <div className="abs style-4" style={{ left: 2, top: 1.9167, width: 18, height: 7.6667 }} />
          </div>
          {/* Cellular bars */}
          <div className="abs" style={{ left: 0, top: 0.44, width: 17.1, height: 10.7 }}>
            <div className="abs style-5" style={{ left: 0, top: 7.3, width: 3, height: 4 }} />
            <div className="abs style-5" style={{ left: 4.8, top: 5.3, width: 3, height: 6 }} />
            <div className="abs style-5" style={{ left: 9.4, top: 3, width: 3, height: 8.3 }} />
            <div className="abs style-5" style={{ left: 14.1, top: 0, width: 3, height: 10.7 }} />
          </div>
          {/* Wi-Fi (approximation via CSS lines) */}
          <div className="abs" style={{ left: 22.1, top: 0.24, width: 15.4, height: 11.06 }}>
            <div className="abs" style={{ left: 0, top: 0, width: 15.4, height: 4.78, borderTop: '1px solid var(--color-000000)' }} />
            <div className="abs" style={{ left: 2.685, top: 3.826, width: 10.03, height: 3.66, borderTop: '1px solid var(--color-000000)' }} />
            <div className="abs" style={{ left: 5.368, top: 7.655, width: 4.665, height: 3.403, background: 'var(--color-000000)', borderRadius: '50%' }} />
          </div>
        </div>
      </div>

      {/* Title: Payment (typo_54) */}
      <div className="abs" style={{ left: 16, top: 56, width: 200, height: 18 }}>
        <div className="typo-54" style={{ textAlign: 'left' }}>Payment</div>
      </div>

      {/* Subtitle: Choose Address (typo_55) */}
      <div className="abs" style={{ left: 16, top: 100, width: 200, height: 18 }}>
        <div className="typo-55" style={{ textAlign: 'left' }}>Choose Address</div>
      </div>

      {/* Address Card 1 (Group 26) */}
      <div className="abs" style={{ left: 16, top: 136, width: 345, height: 118 }}>
        {/* Rectangle 70 style_25 */}
        <div className="abs style-25" style={{ left: 0, top: 0, width: 345, height: 118 }} />
        {/* Lines */}
        <div className="abs" style={{ left: 5, top: 12, width: 200, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>Country :  India</div>
        </div>
        <div className="abs" style={{ left: 5, top: 37, width: 200, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>State : Dehli</div>
        </div>
        <div className="abs" style={{ left: 5, top: 62, width: 200, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>Area: South Dehli</div>
        </div>
        <div className="abs" style={{ left: 5, top: 87, width: 280, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>Building/Flat : Scarlet, 4E, 1931 </div>
        </div>
      </div>

      {/* EDIT label for first card */}
      <div className="abs" style={{ left: 304, top: 140, width: 30, height: 18 }}>
        <div className="typo-52" style={{ textAlign: 'left' }}>EDIT</div>
      </div>

      {/* Address Card 2 (Group 27) */}
      <div className="abs" style={{ left: 16, top: 280, width: 345, height: 118 }}>
        {/* Rectangle 70 style_25 */}
        <div className="abs style-25" style={{ left: 0, top: 0, width: 345, height: 118 }} />
        {/* Lines */}
        <div className="abs" style={{ left: 5, top: 12, width: 200, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>Country :  India</div>
        </div>
        <div className="abs" style={{ left: 5, top: 37, width: 200, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>State : Rajasthan</div>
        </div>
        <div className="abs" style={{ left: 5, top: 62, width: 200, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>Area: Jaipur</div>
        </div>
        <div className="abs" style={{ left: 5, top: 87, width: 320, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>Building/Flat : Kopali state, Ramvivas </div>
        </div>
        {/* EDIT label inside second card */}
        <div className="abs" style={{ left: 304, top: 4, width: 30, height: 18 }}>
          <div className="typo-52" style={{ textAlign: 'left' }}>EDIT</div>
        </div>
      </div>

      {/* ADD ADDRESS group */}
      <div className="abs" style={{ left: 20, top: 424, width: 120, height: 18 }}>
        <div className="typo-52" style={{ textAlign: 'left' }}>ADD ADDRESS</div>
      </div>
      {/* Arrow (rendered as tiny image/line) */}
      <div className="abs" style={{ left: 100, top: 433, width: 19, height: 1 }}>
        <img src="/assets/figmaimages/figma_image_15_52.png" alt="Arrow" className="img-cover" />
      </div>

      {/* Proceed to Pay CTA */}
      <div className="abs style-24" style={{ left: 50, top: 746, width: 289, height: 48, borderRadius: 14 }} />
      <div className="abs" style={{ left: 130, top: 760, width: 150, height: 19 }}>
        <div className="typo-50">PROCEED TO PAY</div>
      </div>

      {/* Bottom Home Indicator */}
      <div className="abs" style={{ left: 0, top: 810, width: 390, height: 34 }}>
        <div className="abs style-6" style={{ left: 135, top: 21, width: 135, height: 5 }} />
      </div>
    </div>
  );
}

export default PaymentScreen;
