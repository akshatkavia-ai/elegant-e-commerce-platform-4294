import React from 'react';
import './home-screen-1-2.css';

/**
 * PUBLIC_INTERFACE
 * HomeScreen
 * This component reconstructs the static Figma export at assets/home-screen-1-2.html
 * using the same class names and absolute positioning. It relies on assets/common.css
 * imported globally to provide tokens, typography, and style helpers.
 */
function HomeScreen() {
  return (
    <div className="screen style-0" role="main" aria-label="Home screen">
      {/* Status Bar group */}
      <div className="abs status-bar" style={{ left: 0, top: 0, width: 375, height: 44 }}>
        {/* Time */}
        <div className="abs" style={{ left: 19.894, top: 14, width: 54, height: 18 }}>
          <div className="typo-31" style={{ width: 54, height: 18 }}>9:41</div>
        </div>

        {/* Right container with battery, signal, wifi */}
        <div className="abs" style={{ left: 307, top: 16, width: 67, height: 11.5 }}>
          {/* Battery */}
          <div className="abs" style={{ left: 43, top: 0, width: 24.5, height: 11.5 }}>
            <div className="abs style-2" style={{ left: 0, top: 0, width: 24.5, height: 11.5 }}>
              <img
                alt="battery-shape1"
                className="abs img-contain"
                style={{ left: 1, top: 1, width: 20, height: 9.5 }}
                src="../../assets/figmaimages/figma_image_1_11.png"
              />
              <img
                alt="battery-shape2"
                className="abs img-contain"
                style={{ left: 0, top: 0, width: 22, height: 11.5 }}
                src="../../assets/figmaimages/figma_image_1_12.png"
              />
              <div
                className="abs"
                style={{ left: 23.5, top: 3.69, width: 1.5, height: 4, background: 'var(--color-ffffff)' }}
              />
            </div>
            <div className="abs style-4" style={{ left: 2, top: 1.9167, width: 18, height: 7.6667 }} />
          </div>

          {/* Cellular bars */}
          <div className="abs" style={{ left: 0, top: 0.44, width: 17.1, height: 10.7 }}>
            <div className="abs style-5" style={{ left: 0, top: 7.3, width: 3, height: 4 }} />
            <div className="abs style-5" style={{ left: 4.8, top: 5.3, width: 3, height: 6 }} />
            <div className="abs style-5" style={{ left: 9.4, top: 3, width: 3, height: 8.3 }} />
            <div className="abs style-5" style={{ left: 14.1, top: 0, width: 3, height: 10.7 }} />
          </div>

          {/* Wi-Fi glyph */}
          <div className="abs" style={{ left: 22.1, top: 0.24, width: 15.4, height: 11.06 }}>
            <div className="abs" style={{ left: 0, top: 0, width: 15.4, height: 4.78, borderTop: '1px solid var(--color-000000)' }} />
            <div className="abs" style={{ left: 2.685, top: 3.826, width: 10.03, height: 3.66, borderTop: '1px solid var(--color-000000)' }} />
            <div className="abs" style={{ left: 5.368, top: 7.655, width: 4.665, height: 3.403, background: 'var(--color-000000)', borderRadius: '50%' }} />
          </div>
        </div>
      </div>

      {/* App Bar (iPhone home indicator approximation per exported HTML) */}
      <div className="abs" style={{ left: 0, top: 169, width: 390, height: 34 }}>
        <div className="abs style-6" style={{ left: 57, top: 21, width: 135, height: 5 }} />
      </div>

      {/* Greetings */}
      <div className="abs" style={{ left: 12, top: 56, width: 179, height: 18 }}>
        <div className="typo-32">Hello Pulakit</div>
      </div>
      <div className="abs" style={{ left: 12, top: 91, width: 151, height: 18 }}>
        <div className="typo-33">Enjoy Shopping</div>
      </div>

      {/* Cards grid */}
      {/* Top-left card */}
      <div className="abs style-43" style={{ left: 12, top: 214, width: 167, height: 163, overflow: 'hidden' }}>
        <img src="../../assets/figmaimages/figma_image_1_827.png" alt="card-image-1" className="img-cover" />
      </div>
      {/* Top-right card */}
      <div className="abs style-43" style={{ left: 208, top: 214, width: 167, height: 163 }} />
      {/* Bottom-left card */}
      <div className="abs style-43" style={{ left: 12, top: 491, width: 167, height: 163 }} />
      {/* Bottom-right card */}
      <div className="abs style-43" style={{ left: 208, top: 491, width: 167, height: 163 }} />

      {/* Menu icons and card icons */}
      {/* Top-left card menu placeholder */}
      <div className="abs" style={{ left: 10, top: 223, width: 25, height: 27 }} />
      {/* Top-right card menu */}
      <div className="abs" style={{ left: 210, top: 223, width: 25, height: 27 }}>
        <img src="../../assets/figmaimages/figma_image_1_845.png" alt="menu-vertical" className="img-contain" />
      </div>

      {/* Shopping Bag icon on top-left card */}
      <div className="abs" style={{ left: 52, top: 238, width: 50, height: 50 }}>
        <img src="../../assets/figmaimages/figma_image_1_836.png" alt="Shopping Bag" className="img-contain" />
      </div>

      {/* Top search group */}
      <div className="abs" style={{ left: 7, top: 131, width: 309, height: 37 }}>
        <div className="abs style-44" style={{ left: 0, top: 0, width: 309, height: 37 }} />
        <div className="abs" style={{ left: 49, top: 8, width: 79, height: 22 }}>
          <div className="typo-36" style={{ textAlign: 'left' }}>Search</div>
        </div>
        <div className="abs" style={{ left: 13, top: 6, width: 26, height: 24 }}>
          <img src="../../assets/figmaimages/figma_image_1_835.png" alt="Search icon" className="img-contain" />
        </div>
      </div>

      {/* Text labels near cards */}
      <div className="abs" style={{ left: 35, top: 298, width: 86, height: 18 }}><div className="typo-37" style={{ textAlign: 'left' }}>Shopping</div></div>
      <div className="abs" style={{ left: 212, top: 301, width: 44, height: 18 }}><div className="typo-37" style={{ textAlign: 'left' }}>Cart</div></div>
      <div className="abs" style={{ left: 25, top: 573, width: 119, height: 18 }}><div className="typo-37" style={{ textAlign: 'left' }}>Track order</div></div>
      <div className="abs" style={{ left: 240, top: 567, width: 65, height: 18 }}><div className="typo-37" style={{ textAlign: 'left' }}>Offers</div></div>

      <div className="abs" style={{ left: 40, top: 364, width: 124, height: 18 }}><div className="typo-38" style={{ textAlign: 'left' }}>Last shopped 2hrs ago</div></div>
      <div className="abs" style={{ left: 246, top: 364, width: 112, height: 18 }}><div className="typo-38" style={{ textAlign: 'left' }}>Last added 3hrs ago</div></div>
      <div className="abs" style={{ left: 44, top: 321, width: 150, height: 18 }}><div className="typo-39" style={{ textAlign: 'left' }}>Continue Shopping</div></div>

      {/* Rectangle 61 on bottom-left card */}
      <div className="abs" style={{ left: 23, top: 602, width: 126, height: 48 }}>
        <img src="../../assets/figmaimages/figma_image_2_858.png" alt="Rectangle 61" className="img-contain" />
      </div>

      {/* Bottom segmented control (Group 3) */}
      <div className="abs style-15" style={{ left: 13, top: 723, width: 363, height: 54 }}>
        <div className="abs style-46" style={{ left: 0, top: 0, width: 363, height: 54 }} />
        <div className="abs" style={{ left: 10, top: 20, width: 331, height: 15 }}>
          <div className="abs" style={{ left: 0, top: 0, width: 64, height: 14 }}><div className="typo-41">Shopping</div></div>
          <div className="abs" style={{ left: 76, top: 0, width: 32, height: 14 }}><div className="typo-41">Cart</div></div>
          <div className="abs" style={{ left: 118, top: 1, width: 48, height: 14 }}><div className="typo-41">Offers</div></div>
          <div className="abs" style={{ left: 179, top: 1, width: 83, height: 14 }}><div className="typo-41">Track order</div></div>
          <div className="abs" style={{ left: 275, top: 1, width: 56, height: 14 }}><div className="typo-41">Profile</div></div>
        </div>
      </div>

      {/* Top-right mini action group (Group 17) */}
      <div className="abs" style={{ left: 274, top: 48, width: 90, height: 38 }}>
        <div className="abs style-45" style={{ left: 0, top: 1, width: 90, height: 36 }} />
        <div className="abs" style={{ left: 14, top: 0, width: 28, height: 37 }}>
          <img src="../../assets/figmaimages/figma_image_2_874.png" alt="Shopping Cart" className="img-contain" />
        </div>
        <div className="abs" style={{ left: 46, top: 1, width: 28, height: 37 }} />
      </div>

      {/* Proceed to Pay CTA on bottom (as in home-screen for parity) */}
      <div className="abs style-24" style={{ left: 46, top: 747, width: 289, height: 48, borderRadius: 14 }} />
      <div className="abs" style={{ left: 129, top: 761, width: 150, height: 19 }}>
        <div className="typo-50">PROCEED TO PAY</div>
      </div>
    </div>
  );
}

export default HomeScreen;
