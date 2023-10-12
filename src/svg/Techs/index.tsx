import { useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const Techs = ()=>{

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      gsap.to( ".Techs",{
        duration : 10,
        scrollTrigger:{
            trigger:".Techs",
            start: '-40% 40%',
            // end : 'bottom 100%',
            onEnter : ()=>{
              document.querySelector(".Techs")?.classList.add("TechsAnimation");
            },
            // markers: true
        }

      })
    },[])


    return(
      <>
          <svg className="Techs" width="1036" height="442" viewBox="0 0 1036 442" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Techs">
<g id="IconCss" filter="url(#filter0_dd_450_2042)">
<path d="M110.607 156H167L161.809 178.416M161.809 178.416H110.607M161.809 178.416L156.854 202.955L128.775 213.101L104 202.955L106.831 191.393" stroke="url(#paint0_linear_450_2042)" stroke-width="5.7167" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="IconJs" filter="url(#filter1_dd_450_2042)">
<path d="M222.943 280V340.076H203M268 280H243.379V311.269H268V340.076H243.379" stroke="url(#paint1_linear_450_2042)" stroke-width="5.9652" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="IconSass" filter="url(#filter2_dd_450_2042)">
<path d="M355.049 72L315 114.405H363L318.828 159.46" stroke="url(#paint2_linear_450_2042)" stroke-width="7.1346" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="IconGSAP" filter="url(#filter3_dd_450_2042)">
<g id="circles">
<circle id="Ellipse 234" cx="950.436" cy="340.436" r="9.4364" stroke="url(#paint3_linear_450_2042)" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
<circle id="Ellipse 235" cx="962.74" cy="363.454" r="9.4364" stroke="url(#paint4_linear_450_2042)" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
<circle id="Ellipse 236" cx="937.436" cy="363.454" r="9.4364" stroke="url(#paint5_linear_450_2042)" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<circle id="Ellipse 237" cx="950.166" cy="352.166" r="35.1661" stroke="url(#paint6_linear_450_2042)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="IconHtml" filter="url(#filter4_dd_450_2042)">
<path d="M931.376 156H891L892.698 176.377H931.376L929.301 196.942L912.132 204.112L893.83 196.942V185.999" stroke="url(#paint7_linear_450_2042)" stroke-width="4.17688" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="IconTs" filter="url(#filter5_dd_450_2042)">
<path d="M740 48H710.23V86.5161H740V122.875H706.199M674.258 124.724V48M674.258 48H697.516M674.258 48H651" stroke="url(#paint8_linear_450_2042)" stroke-width="7.67241" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="IconReact" filter="url(#filter6_dd_450_2042)">
<path id="Ellipse 239" d="M530.269 227.795C541.181 245.886 548.051 263.941 550.406 278.441C551.584 285.698 551.61 291.932 550.542 296.783C549.476 301.627 547.385 304.859 544.505 306.596C541.625 308.334 537.79 308.676 533.009 307.359C528.219 306.041 522.717 303.111 516.848 298.683C505.12 289.837 492.354 275.338 481.442 257.247C470.53 239.157 463.66 221.102 461.305 206.602C460.126 199.344 460.101 193.111 461.168 188.26C462.234 183.416 464.326 180.184 467.206 178.446C470.086 176.709 473.92 176.367 478.702 177.683C483.492 179.002 488.993 181.932 494.863 186.36C506.591 195.206 519.357 209.705 530.269 227.795Z" stroke="url(#paint9_linear_450_2042)" stroke-width="5.11566"/>
<path id="Ellipse 240" d="M529.235 255.839C518.629 274.11 506.109 288.822 494.532 297.865C488.738 302.391 483.286 305.413 478.519 306.812C473.76 308.209 469.921 307.931 467.012 306.243C464.103 304.554 461.957 301.358 460.81 296.532C459.661 291.699 459.582 285.467 460.638 278.19C462.748 263.653 469.313 245.485 479.919 227.213C490.525 208.941 503.045 194.23 514.622 185.187C520.417 180.661 525.868 177.639 530.635 176.24C535.394 174.843 539.234 175.121 542.142 176.809C545.051 178.498 547.197 181.694 548.344 186.519C549.493 191.352 549.573 197.585 548.516 204.861C546.406 219.399 539.841 237.567 529.235 255.839Z" stroke="url(#paint10_linear_450_2042)" stroke-width="5.11566"/>
<path id="Ellipse 241" d="M504.753 270.036C483.626 270.166 464.597 266.841 450.931 261.452C444.091 258.755 438.721 255.59 435.097 252.192C431.478 248.8 429.77 245.35 429.749 241.987C429.728 238.623 431.394 235.153 434.971 231.716C438.552 228.274 443.883 225.043 450.689 222.262C464.288 216.705 483.275 213.145 504.401 213.015C525.528 212.885 544.557 216.21 558.223 221.599C565.063 224.297 570.433 227.461 574.057 230.859C577.675 234.251 579.384 237.701 579.405 241.064C579.425 244.428 577.759 247.898 574.183 251.335C570.601 254.777 565.271 258.008 558.464 260.789C544.866 266.346 525.879 269.906 504.753 270.036Z" stroke="url(#paint11_linear_450_2042)" stroke-width="5.11566"/>
<circle id="Ellipse 242" cx="504.505" cy="240.781" r="14.0681" fill="url(#paint12_linear_450_2042)"/>
</g>
<g id="IconFigma" filter="url(#filter7_dd_450_2042)">
<path id="Vector 353" d="M798.343 275.028V248H783.258C766.914 248 766.914 275.028 783.258 275.028H798.343Z" stroke="url(#paint13_linear_450_2042)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector 355" d="M798.343 302.056V275.028H783.258C766.914 275.028 766.914 302.056 783.258 302.056H798.343Z" stroke="url(#paint14_linear_450_2042)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector 354" d="M798.657 275.028V248H813.742C830.086 248 830.086 275.028 813.742 275.028H798.657Z" stroke="url(#paint15_linear_450_2042)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
<circle id="Ellipse 243" cx="812.171" cy="288.857" r="11.9427" transform="rotate(-180 812.171 288.857)" stroke="url(#paint16_linear_450_2042)" stroke-width="3.77139"/>
<path id="Vector 356" d="M798.342 317.142V302.057H783.885C770.686 302.057 767.542 318.399 775.085 325.313C782.628 332.228 797.714 329.713 798.342 317.142Z" stroke="url(#paint17_linear_450_2042)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="firebase" filter="url(#filter8_dd_450_2042)">
<path d="M50 371.909L59.8182 313L77.2727 345.182M50 371.909L77.2727 387.182L104 373L95.2727 327.727L85.1477 337.545M50 371.909L77.2727 345.182M50 371.909L77.2727 322.273L85.1477 337.545M77.2727 345.182L85.1477 337.545" stroke="url(#paint18_linear_450_2042)" stroke-width="3.51515" stroke-linejoin="round" shape-rendering="crispEdges"/>
</g>
<path id="nodejs" d="M628 371V400.5C626.636 405.553 624.676 406.491 619.5 405.5L610 400V367L638.5 350L667 367V400L638.5 417L629 411M656.5 378.5C656.5 375.5 653.5 372 650 372H642.5C634 372 633.48 383 642.5 383C653 383 656.5 385 656.5 389.5C656.418 393.071 654.5 395.5 651 395.5H642.5C638 395.5 635 393 635 388" stroke="url(#paint19_linear_450_2042)" stroke-width="4" stroke-linejoin="round"/>
<path id="mongodb" d="M361.305 412.464C351.028 404.593 347 397.205 347 382.424C347 364.781 360.348 358.583 362.258 350C362.258 357.152 376.56 360.013 378.47 382.424C379.69 396.728 375.187 402.936 365.119 412.464M361.305 412.464C362.085 415.75 362.253 417.632 362.258 421.046L364.162 422C364.344 418.6 364.475 415.747 365.119 412.464M361.305 412.464C362.108 408.785 362.315 406.678 362.732 402.927C364.639 406.265 362.732 410.079 365.119 412.464" stroke="url(#paint20_linear_450_2042)" stroke-width="4"/>
</g>
<defs>
<filter id="filter0_dd_450_2042" x="53.1413" y="109.142" width="164.717" height="158.818" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter1_dd_450_2042" x="152.017" y="233.017" width="166.965" height="162.041" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter2_dd_450_2042" x="263.433" y="24.4327" width="151.135" height="190.595" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter3_dd_450_2042" x="864.5" y="270.5" width="171.332" height="171.332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter4_dd_450_2042" x="840.912" y="109.912" width="140.553" height="148.289" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter5_dd_450_2042" x="599.164" y="0.163818" width="192.672" height="180.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter6_dd_450_2042" x="379.191" y="128.788" width="250.771" height="233.929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter7_dd_450_2042" x="721.114" y="202.114" width="154.771" height="180.857" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<filter id="filter8_dd_450_2042" x="0.24234" y="267.242" width="153.515" height="173.697" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="24"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_450_2042"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_450_2042" result="effect2_dropShadow_450_2042"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_450_2042" result="shape"/>
</filter>
<linearGradient id="paint0_linear_450_2042" x1="167" y1="156" x2="96.0118" y2="185.37" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint1_linear_450_2042" x1="268" y1="280" x2="194.346" y2="309.884" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint2_linear_450_2042" x1="363" y1="72" x2="302.23" y2="84.5069" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint3_linear_450_2042" x1="959.873" y1="331" x2="938.037" y2="339.188" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint4_linear_450_2042" x1="972.177" y1="354.017" x2="950.341" y2="362.206" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint5_linear_450_2042" x1="946.873" y1="354.017" x2="925.037" y2="362.206" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint6_linear_450_2042" x1="985.332" y1="317" x2="903.959" y2="347.514" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint7_linear_450_2042" x1="931.376" y1="156" x2="882.894" y2="171.257" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint8_linear_450_2042" x1="740" y1="48" x2="641.237" y2="90.9615" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint9_linear_450_2042" x1="492.488" y1="160.209" x2="430.063" y2="211.961" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint10_linear_450_2042" x1="570.297" y1="190.194" x2="494.888" y2="160.381" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint11_linear_450_2042" x1="582.154" y1="272.117" x2="569.588" y2="192.009" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint12_linear_450_2042" x1="518.573" y1="226.713" x2="486.02" y2="238.92" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint13_linear_450_2042" x1="798.342" y1="248" x2="783.997" y2="250.273" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint14_linear_450_2042" x1="798.342" y1="275.028" x2="783.997" y2="277.301" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint15_linear_450_2042" x1="798.658" y1="248" x2="813.003" y2="250.273" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint16_linear_450_2042" x1="825.998" y1="275.028" x2="811.48" y2="277.302" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint17_linear_450_2042" x1="798.341" y1="302.057" x2="784.04" y2="304.354" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint18_linear_450_2042" x1="103.998" y1="313.67" x2="75.348" y2="317.02" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint19_linear_450_2042" x1="666.998" y1="350.605" x2="636.905" y2="354.718" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
<linearGradient id="paint20_linear_450_2042" x1="378.664" y1="350.65" x2="361.719" y2="351.847" gradientUnits="userSpaceOnUse">
<stop stop-color="#6D0896"/>
<stop offset="1" stop-color="#AB40D6"/>
</linearGradient>
</defs>
</svg>




      </>
  )
}


//SVG DE ANTES QUE ESTAVA DANDO CERTO SEM O FIREBASE

//     return(
//         <>
//             <svg className="Techs" width="983" height="442" viewBox="0 0 983 442" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g id="Techs">
// <g id="IconCss" filter="url(#filter0_dd_238_2009)">
// <path d="M57.6067 156H114L108.809 178.416M108.809 178.416H57.6067M108.809 178.416L103.854 202.955L75.7753 213.101L51 202.955L53.8315 191.393" stroke="url(#paint0_linear_238_2009)" stroke-width="5.7167" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <g id="IconJs" filter="url(#filter1_dd_238_2009)">
// <path d="M169.943 280V340.076H150M215 280H190.379V311.269H215V340.076H190.379" stroke="url(#paint1_linear_238_2009)" stroke-width="5.9652" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <g id="IconSass" filter="url(#filter2_dd_238_2009)">
// <path d="M302.049 72L262 114.405H310L265.828 159.46" stroke="url(#paint2_linear_238_2009)" stroke-width="7.1346" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <g id="IconGSAP" filter="url(#filter3_dd_238_2009)">
// <g id="circles">
// <circle id="Ellipse 234" cx="897.436" cy="340.436" r="9.4364" stroke="url(#paint3_linear_238_2009)" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
// <circle id="Ellipse 235" cx="909.74" cy="363.454" r="9.4364" stroke="url(#paint4_linear_238_2009)" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
// <circle id="Ellipse 236" cx="884.436" cy="363.454" r="9.4364" stroke="url(#paint5_linear_238_2009)" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <circle id="Ellipse 237" cx="897.166" cy="352.166" r="35.1661" stroke="url(#paint6_linear_238_2009)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <g id="IconHtml" filter="url(#filter4_dd_238_2009)">
// <path d="M878.376 156H838L839.698 176.377H878.376L876.301 196.942L859.132 204.112L840.83 196.942V185.999" stroke="url(#paint7_linear_238_2009)" stroke-width="4.17688" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <g id="IconTs" filter="url(#filter5_dd_238_2009)">
// <path d="M687 48H657.23V86.5161H687V122.875H653.199M621.258 124.724V48M621.258 48H644.516M621.258 48H598" stroke="url(#paint8_linear_238_2009)" stroke-width="7.67241" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <g id="IconReact" filter="url(#filter6_dd_238_2009)">
// <path id="Ellipse 239" d="M477.269 227.795C488.181 245.886 495.051 263.941 497.406 278.441C498.584 285.698 498.61 291.932 497.542 296.783C496.477 301.627 494.385 304.859 491.505 306.596C488.625 308.334 484.79 308.676 480.009 307.359C475.219 306.041 469.717 303.111 463.848 298.683C452.12 289.837 439.354 275.338 428.442 257.247C417.53 239.157 410.66 221.102 408.305 206.602C407.126 199.344 407.101 193.111 408.168 188.26C409.234 183.416 411.326 180.184 414.206 178.446C417.086 176.709 420.92 176.367 425.702 177.683C430.492 179.002 435.993 181.932 441.863 186.36C453.591 195.206 466.357 209.705 477.269 227.795Z" stroke="url(#paint9_linear_238_2009)" stroke-width="5.11566"/>
// <path id="Ellipse 240" d="M476.235 255.839C465.629 274.11 453.109 288.822 441.532 297.865C435.738 302.391 430.286 305.413 425.519 306.812C420.76 308.209 416.921 307.931 414.012 306.243C411.103 304.554 408.957 301.358 407.81 296.532C406.661 291.699 406.582 285.467 407.638 278.19C409.748 263.653 416.313 245.485 426.919 227.213C437.525 208.941 450.045 194.23 461.622 185.187C467.417 180.661 472.868 177.639 477.635 176.24C482.394 174.843 486.234 175.121 489.142 176.809C492.051 178.498 494.197 181.694 495.344 186.519C496.493 191.352 496.573 197.585 495.517 204.861C493.406 219.399 486.841 237.567 476.235 255.839Z" stroke="url(#paint10_linear_238_2009)" stroke-width="5.11566"/>
// <path id="Ellipse 241" d="M451.753 270.036C430.626 270.166 411.597 266.841 397.931 261.452C391.091 258.755 385.721 255.59 382.097 252.192C378.478 248.8 376.77 245.35 376.749 241.987C376.728 238.623 378.394 235.153 381.97 231.716C385.552 228.274 390.883 225.043 397.689 222.262C411.288 216.705 430.275 213.145 451.401 213.015C472.527 212.885 491.557 216.21 505.223 221.599C512.063 224.297 517.433 227.461 521.057 230.859C524.675 234.251 526.384 237.701 526.405 241.064C526.425 244.428 524.759 247.898 521.183 251.335C517.601 254.777 512.271 258.008 505.464 260.789C491.866 266.346 472.879 269.906 451.753 270.036Z" stroke="url(#paint11_linear_238_2009)" stroke-width="5.11566"/>
// <circle id="Ellipse 242" cx="451.505" cy="240.781" r="14.0681" fill="url(#paint12_linear_238_2009)"/>
// </g>
// <g id="IconFigma" filter="url(#filter7_dd_238_2009)">
// <path id="Vector 353" d="M745.343 275.028V248H730.258C713.914 248 713.914 275.028 730.258 275.028H745.343Z" stroke="url(#paint13_linear_238_2009)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
// <path id="Vector 355" d="M745.343 302.056V275.028H730.258C713.914 275.028 713.914 302.056 730.258 302.056H745.343Z" stroke="url(#paint14_linear_238_2009)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
// <path id="Vector 354" d="M745.657 275.028V248H760.742C777.086 248 777.086 275.028 760.742 275.028H745.657Z" stroke="url(#paint15_linear_238_2009)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
// <circle id="Ellipse 243" cx="759.17" cy="288.857" r="11.9427" transform="rotate(-180 759.17 288.857)" stroke="url(#paint16_linear_238_2009)" stroke-width="3.77139"/>
// <path id="Vector 356" d="M745.342 317.142V302.057H730.885C717.686 302.057 714.542 318.399 722.085 325.313C729.628 332.228 744.714 329.713 745.342 317.142Z" stroke="url(#paint17_linear_238_2009)" stroke-width="3.77139" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// </g>
// <defs>
// <filter id="filter0_dd_238_2009" x="0.141357" y="109.142" width="164.717" height="158.818" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <filter id="filter1_dd_238_2009" x="99.0173" y="233.017" width="166.965" height="162.041" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <filter id="filter2_dd_238_2009" x="210.433" y="24.4327" width="151.135" height="190.595" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <filter id="filter3_dd_238_2009" x="811.5" y="270.5" width="171.332" height="171.332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <filter id="filter4_dd_238_2009" x="787.911" y="109.912" width="140.553" height="148.289" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <filter id="filter5_dd_238_2009" x="546.164" y="0.163818" width="192.672" height="180.396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <filter id="filter6_dd_238_2009" x="326.191" y="128.788" width="250.771" height="233.929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <filter id="filter7_dd_238_2009" x="668.114" y="202.114" width="154.771" height="180.857" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="24"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.2376 0 0 0 0 0.8019 0 0 0 0 0.99 0 0 0 0.24 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_2009"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="6"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.0117647 0 0 0 0 0.0196078 0 0 0 0.88 0"/>
// <feBlend mode="normal" in2="effect1_dropShadow_238_2009" result="effect2_dropShadow_238_2009"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238_2009" result="shape"/>
// </filter>
// <linearGradient id="paint0_linear_238_2009" x1="114" y1="156" x2="43.0118" y2="185.37" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint1_linear_238_2009" x1="215" y1="280" x2="141.346" y2="309.884" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint2_linear_238_2009" x1="310" y1="72" x2="249.23" y2="84.5069" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint3_linear_238_2009" x1="906.873" y1="331" x2="885.037" y2="339.188" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint4_linear_238_2009" x1="919.177" y1="354.017" x2="897.341" y2="362.206" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint5_linear_238_2009" x1="893.873" y1="354.017" x2="872.037" y2="362.206" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint6_linear_238_2009" x1="932.332" y1="317" x2="850.959" y2="347.514" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint7_linear_238_2009" x1="878.376" y1="156" x2="829.894" y2="171.257" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint8_linear_238_2009" x1="687" y1="48" x2="588.237" y2="90.9615" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint9_linear_238_2009" x1="439.488" y1="160.209" x2="377.063" y2="211.961" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint10_linear_238_2009" x1="517.297" y1="190.194" x2="441.888" y2="160.381" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint11_linear_238_2009" x1="529.154" y1="272.117" x2="516.588" y2="192.009" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint12_linear_238_2009" x1="465.573" y1="226.713" x2="433.02" y2="238.92" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint13_linear_238_2009" x1="745.342" y1="248" x2="730.997" y2="250.273" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint14_linear_238_2009" x1="745.342" y1="275.028" x2="730.997" y2="277.301" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint15_linear_238_2009" x1="745.658" y1="248" x2="760.003" y2="250.273" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint16_linear_238_2009" x1="772.998" y1="275.028" x2="758.48" y2="277.302" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// <linearGradient id="paint17_linear_238_2009" x1="745.341" y1="302.057" x2="731.04" y2="304.354" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6D0896"/>
// <stop offset="1" stop-color="#AB40D6"/>
// </linearGradient>
// </defs>
// </svg>

//         </>
//     )
// }