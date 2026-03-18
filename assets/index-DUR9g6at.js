import{cB as l,cC as g,c_ as h,d6 as m,cE as w,cD as s,de as _,df as E,d0 as R,cS as y,cT as b,cV as v,cW as C,cU as O}from"./index-6E491jkA.js";import{n as d,c as S}from"./index-YtpZkc_K.js";import{o as $}from"./if-defined-BsfPVzL_.js";function T(){try{return s.returnOpenHref(`${R.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function U(){h.push("ConnectingFarcaster");const e=m.getAuthConnector();if(e){const o=l.getAccountData();if(!(o!=null&&o.farcasterUrl))try{const{url:t}=await e.provider.getFarcasterUri();l.setAccountProp("farcasterUrl",t,l.state.activeChain)}catch(t){h.goBack(),w.showError(t)}}}async function I(e){h.push("ConnectingSocial");const o=m.getAuthConnector();let t=null;try{const i=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(o&&e){if(s.isTelegram()||(t=T()),t)l.setAccountProp("socialWindow",_(t),l.state.activeChain);else if(!s.isTelegram())throw new Error("Could not create social popup");const{uri:n}=await o.provider.getSocialRedirectUri({provider:e});if(!n)throw t==null||t.close(),new Error("Could not fetch the social redirect uri");if(t&&(t.location.href=n),s.isTelegram()){E.setTelegramSocialProvider(e);const r=s.formatTelegramSocialLoginUrl(n);s.openHref(r,"_top")}clearTimeout(i)}}catch(i){t==null||t.close();const n=s.parseError(i);w.showError(n),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:n}})}}async function W(e){l.setAccountProp("socialProvider",e,l.state.activeChain),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await U():await I(e)}const L=y`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var x=function(e,o,t,i){var n=arguments.length,r=n<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(n<3?a(r):n>3?a(o,t,r):a(o,t))||r);return n>3&&r&&Object.defineProperty(o,t,r),r};let p=class extends v{constructor(){super(...arguments),this.logo="google"}render(){return C`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};p.styles=[b,L];x([d()],p.prototype,"logo",void 0);p=x([S("wui-logo")],p);const A=y`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var f=function(e,o,t,i){var n=arguments.length,r=n<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(n<3?a(r):n>3?a(o,t,r):a(o,t))||r);return n>3&&r&&Object.defineProperty(o,t,r),r};let u=class extends v{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return C`
      <button ?disabled=${this.disabled} tabindex=${$(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};u.styles=[b,O,A];f([d()],u.prototype,"logo",void 0);f([d()],u.prototype,"name",void 0);f([d()],u.prototype,"tabIdx",void 0);f([d({type:Boolean})],u.prototype,"disabled",void 0);u=f([S("wui-list-social")],u);export{W as e};
