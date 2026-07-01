import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import CrazyGLWrapper, { loadGoogleFont, useHeroReady } from '@crazygl/core';
import metadata from './metadata.json';
import './style.css';
const W = { '100': '100', '200': '200', '300': '300', '400': '400', '500': '500', '600': '600', '700': '700', '800': '800', '900': '900' };
function CursorShadowTextHero(props) {
    const { rootRef, reducedMotion, pointer, heading = 'follow the light', shadowColor = '#5b8def', maxOffset = 40, blur = 12, textColor = '#ffffff', fontSize = 160, headingFontFamily = 'Inter', headingFontWeight = '800', transparentBackground = false, bgColor = '#0a0c14', } = props;
    const weight = W[String(headingFontWeight)] ?? '800';
    useHeroReady(props);
    React.useEffect(() => { if (!headingFontFamily || headingFontFamily === 'Inherit')
        return; try {
        loadGoogleFont(headingFontFamily, { weights: ['400', '500', '600', '700', '800', '900'] });
    }
    catch { /* */ } }, [headingFontFamily]);
    const hRef = React.useRef(null);
    // Pointer is the only driver. Previously a rAF tick orbited the
    // shadow on its own when the cursor sat still for >0.4s — the
    // shadow kept drifting on autopilot which fought with the user's
    // intuition that they were holding the light steady.
    React.useEffect(() => {
        if (!hRef.current)
            return;
        const dx = reducedMotion ? 0 : ((pointer?.x ?? 0.5) - 0.5) * 2;
        const dy = reducedMotion ? 0 : ((pointer?.y ?? 0.5) - 0.5) * 2;
        hRef.current.style.textShadow = `${-dx * maxOffset}px ${-dy * maxOffset}px ${blur}px ${shadowColor}`;
    }, [pointer?.x, pointer?.y, maxOffset, blur, shadowColor, reducedMotion]);
    const ff = headingFontFamily && headingFontFamily !== 'Inherit' ? `"${headingFontFamily}", system-ui` : 'system-ui';
    return (_jsxs(_Fragment, { children: [_jsx("crazygl-stage", { style: { background: transparentBackground ? 'transparent' : bgColor } }), _jsx("crazygl-content", { children: _jsx("div", { ref: hRef, className: "crazygl-cst-h", style: { fontFamily: ff, fontWeight: weight, fontSize: `${Math.max(28, fontSize)}px`, color: textColor }, children: heading }) })] }));
}
export default function CursorShadowText(props) { return _jsx(CrazyGLWrapper, { hero: CursorShadowTextHero, metadata: metadata, ...props }); }
export { metadata };
