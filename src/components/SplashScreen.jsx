import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- IDINAGDAG ITO
import '../splash.css';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate(); // <-- IDINAGDAG ITO

  useEffect(() => {
    if (!showSplash) return;

    // 1. PILITIN LUMIPAT SA HOME PAGE (Hero section)
    navigate('/'); 

    // 2. I-force sa pinakataas
    window.scrollTo(0, 0);
    
    // 3. I-lock ang scroll habang may splash
    document.body.style.overflow = 'hidden';

    const splash = document.querySelector('.splash');
    
    const aim = () => {
      const target = document.querySelector('.dot-target');
      if (!target || !splash) return;

      const r = target.getBoundingClientRect();
      
      splash.style.setProperty('--dx', (r.left + r.width / 2) + 'px');
      splash.style.setProperty('--dy', (r.top + r.height / 2) + 'px');
      splash.style.setProperty('--dr', (r.width / 2) + 'px');
    };

    // Medyo pinatagal natin ng konti ang timer bago kunin ang posisyon 
    // para sure na naka-render na ang Hero page pagkatapos mag-navigate
    const aimTimer = setTimeout(aim, 300); 
    
    window.addEventListener('resize', aim);
    if (document.fonts) document.fonts.ready.then(aim);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = 'unset'; 
    }, 8800); 

    return () => {
      clearTimeout(aimTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('resize', aim);
      document.body.style.overflow = 'unset';
    };
  }, [showSplash, navigate]);

  if (!showSplash) return null;

  return (
    <div className="splash" aria-hidden="true">
      <div className="cat-pos">
        <div className="cat-rise">
          <div className="cat-jump">
            <div className="cat-squash">
              <svg className="cat" viewBox="-40 0 380 300" role="img">
                <g className="ear ear-l">
                  <path className="c-ear" d="M54 140 L62 34 L134 82 Z"/>
                  <path className="c-ear-in" d="M68 118 L72 60 L112 86 Z"/>
                </g>
                <g className="ear ear-r">
                  <path className="c-ear" d="M246 140 L238 34 L166 82 Z"/>
                  <path className="c-ear-in" d="M232 118 L228 60 L188 86 Z"/>
                </g>
                <ellipse className="c-head" cx="150" cy="165" rx="100" ry="92"/>
                <path className="c-stripe" d="M150 80 v28 M128 84 l5 22 M172 84 l-5 22 M58 160 h20 M60 176 h18 M242 160 h-20 M240 176 h-18"/>
                <ellipse className="c-muzzle" cx="150" cy="216" rx="46" ry="32"/>
                <path className="c-nose" d="M137 196 Q150 189 163 196 Q157 211 150 213 Q143 211 137 196Z"/>
                <path className="c-mouth" d="M150 213 v8 M150 221 q-11 11 -22 3 M150 221 q11 11 22 3"/>
                <path className="c-whisk" d="M62 206 L10 194 M64 218 L12 224 M238 206 L290 194 M236 218 L288 224"/>
                <g className="eye">
                  <circle className="e-white" cx="105" cy="150" r="27"/>
                  <g className="look">
                    <circle className="e-iris" cx="105" cy="150" r="18"/>
                    <ellipse className="e-pupil" cx="105" cy="150" rx="8" ry="14"/>
                    <circle className="e-shine" cx="111" cy="143" r="4.5"/>
                  </g>
                </g>
                <g className="eye">
                  <circle className="e-white" cx="195" cy="150" r="27"/>
                  <g className="look">
                    <circle className="e-iris" cx="195" cy="150" r="18"/>
                    <ellipse className="e-pupil" cx="195" cy="150" rx="8" ry="14"/>
                    <circle className="e-shine" cx="201" cy="143" r="4.5"/>
                  </g>
                </g>
                <g className="paw paw-l">
                  <ellipse className="c-paw" cx="8" cy="238" rx="32" ry="27"/>
                  <path className="c-toe" d="M-4 230 v13 M8 226 v17 M20 230 v13"/>
                </g>
                <g className="paw paw-r">
                  <ellipse className="c-paw" cx="292" cy="238" rx="32" ry="27"/>
                  <path className="c-toe" d="M280 230 v13 M292 226 v17 M304 230 v13"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flood"></div>
      <div className="splash-name">
        <b>Nicole Casey</b>
        <span>Web Portfolio</span>
      </div>
    </div>
  );
}