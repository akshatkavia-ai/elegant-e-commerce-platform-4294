import React from 'react';
import './cart-11-18.css';

/**
 * PUBLIC_INTERFACE
 * CartScreen
 * This component reconstructs the static Figma export at assets/cart-11-18.html
 * using the same class names and absolute positioning. It relies on src/figma-common.css
 * and src/figma-common-fallback.css (imported globally in index.js) to provide tokens,
 * typography, and style helpers. Images are referenced via /assets/figmaimages path.
 */
function CartScreen() {
  return (
    <div className="screen style-0" role="main" aria-label="Cart screen">
      {/* Status Bar */}
      <div className="abs" style={{ left: 0, top: 0, width: 375, height: 44 }}>
        {/* Time */}
        <div className="abs" style={{ left: 19.894, top: 14, width: 54, height: 18 }}>
          <div className="typo-31" style={{ width: 54, height: 18 }}>9:41</div>
        </div>
        {/* Right icons container */}
        <div className="abs" style={{ left: 307, top: 16, width: 67, height: 11.5 }}>
          {/* Battery */}
          <div className="abs" style={{ left: 43, top: 0, width: 24.5, height: 11.5 }}>
            <div className="abs style-2" style={{ left: 0, top: 0, width: 24.5, height: 11.5 }}>
              <img
                alt="battery-shape-1"
                className="abs img-contain"
                style={{ left: 1, top: 1, width: 20, height: 9.5 }}
                src="/assets/figmaimages/figma_image_11_26.png"
              />
              <img
                alt="battery-shape-2"
                className="abs img-contain"
                style={{ left: 0, top: 0, width: 22, height: 11.5 }}
                src="/assets/figmaimages/figma_image_11_27.png"
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
          {/* Wi-Fi */}
          <div className="abs" style={{ left: 22.1, top: 0.24, width: 15.4, height: 11.06 }}>
            <div className="abs" style={{ left: 0, top: 0, width: 15.4, height: 4.78, borderTop: '1px solid var(--color-000000)' }} />
            <div className="abs" style={{ left: 2.685, top: 3.826, width: 10.03, height: 3.66, borderTop: '1px solid var(--color-000000)' }} />
            <div className="abs" style={{ left: 5.368, top: 7.655, width: 4.665, height: 3.403, background: 'var(--color-000000)', borderRadius: '50%' }} />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="abs" style={{ left: 20, top: 75, width: 88, height: 18 }}>
        <div className="typo-46" style={{ textAlign: 'left' }}>Cart</div>
      </div>

      {/* Search Bar */}
      <div className="abs" style={{ left: 7, top: 131, width: 309, height: 37 }}>
        <div className="abs style-44" style={{ left: 0, top: 0, width: 309, height: 37 }} />
        <div className="abs" style={{ left: 49, top: 8, width: 79, height: 22 }}>
          <div className="typo-36" style={{ textAlign: 'left' }}>Search</div>
        </div>
        <div className="abs" style={{ left: 13, top: 6, width: 26, height: 24 }}>
          <img src="/assets/figmaimages/figma_image_11_87.png" alt="Search icon" className="img-contain" />
        </div>
      </div>

      {/* Filter */}
      <div className="abs" style={{ left: 323, top: 134, width: 38, height: 18 }}>
        <div className="typo-43" style={{ textAlign: 'right' }}>Filter</div>
      </div>

      {/* Product: Shampoo (card) */}
      <div className="abs" style={{ left: 12, top: 178, width: 167, height: 189 }}>
        <div className="abs style-47" style={{ left: 0, top: 0, width: 167, height: 189, borderRadius: 16, overflow: 'hidden' }}>
          <img src="/assets/figmaimages/figma_image_11_151.png" alt="Card bg" className="img-cover" />
        </div>
        <div className="abs" style={{ left: 19, top: 5, width: 126, height: 18 }}>
          <div className="typo-42">Free delivery</div>
        </div>
        <div className="abs style-43" style={{ left: 0, top: 26, width: 167, height: 163, overflow: 'hidden' }} />
        <div className="abs" style={{ left: 0, top: 26, width: 167, height: 163, overflow: 'hidden' }}>
          <img src="/assets/figmaimages/figma_image_11_154.png" alt="Shampoo content" className="img-cover" />
        </div>
        <div className="abs" style={{ left: 58, top: 38, width: 47, height: 18 }}>
          <div className="typo-43" style={{ textAlign: 'left' }}>Shampoo</div>
        </div>
        <div className="abs" style={{ left: 27, top: 110, width: 100, height: 18 }}>
          <div className="typo-43" style={{ textAlign: 'left' }}>Cost: $500</div>
        </div>
      </div>

      {/* Bill Summary container */}
      <div className="abs style-48" style={{ left: 22, top: 596, width: 349, height: 132 }} />

      {/* Bill lines (placed as in export to match exact y offsets) */}
      <div className="abs" style={{ left: 33, top: 610, width: 160, height: 11 }}>
        <div className="typo-48" style={{ textAlign: 'left' }}>Net bill : $3300</div>
      </div>
      <div className="abs" style={{ left: 33, top: 628, width: 200, height: 11 }}>
        <div className="typo-48" style={{ textAlign: 'left' }}>Discount deduction: $1300</div>
      </div>
      <div className="abs" style={{ left: 33, top: 646, width: 150, height: 11 }}>
        <div className="typo-48" style={{ textAlign: 'left' }}>Service charge: $25</div>
      </div>
      <div className="abs" style={{ left: 33, top: 664, width: 160, height: 11 }}>
        <div className="typo-48" style={{ textAlign: 'left' }}>Delivery charge: $10</div>
      </div>
      <div className="abs" style={{ left: 31, top: 687, width: 160, height: 19 }}>
        <div className="typo-49" style={{ textAlign: 'left' }}>Total : $2035</div>
      </div>

      {/* Proceed to Pay */}
      <div className="abs style-24" style={{ left: 46, top: 747, width: 289, height: 48, borderRadius: 14 }} />
      <div className="abs" style={{ left: 118, top: 761, width: 150, height: 19 }}>
        <div className="typo-50">PROCEED TO PAY</div>
      </div>
    </div>
  );
}

export default CartScreen;
