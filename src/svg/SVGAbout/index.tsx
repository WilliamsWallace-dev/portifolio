import { useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const SVGAboutUp = ()=>{

   gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      gsap.to( ".SVGAboutUp",{
        duration : 10,
        scrollTrigger:{
            trigger:".SVGAboutUp",
            start: '-20% 40%',
            // end : 'bottom 100%',
            onEnter : ()=>{
              document.querySelector(".SVGAboutUp")?.classList.add("SVGAboutAnimation");
            },
            // markers: true
        }

      })
    },[])


   return(
    <>
      <svg width="2552" height="876" viewBox="0 0 2552 876" fill="none" className="SVGAboutUp mobile-none " xmlns="http://www.w3.org/2000/svg">
<g id="SVGAboutUp">
<mask id="mask0_336_1496" style={{maskType : "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="2552" height="876">
<path id="Rectangle 1010" d="M0 0H2552V876H0V0Z" fill="url(#paint0_linear_336_1496)"/>
</mask>
<g mask="url(#mask0_336_1496)">
<g id="SVGAbout">
<path className="Polygon3" d="M1288.5 359.515L2381.86 229.704H195.143L1288.5 359.515Z" fill="url(#paint1_radial_336_1496)"/>
<path className="Polygon4" d="M1288 349.975L2257.95 234.475H318.052L1288 349.975Z" fill="url(#paint2_radial_336_1496)"/>
<path className="Polygon5" d="M1289.5 328.975L1994.88 244.975H584.122L1289.5 328.975Z" fill="url(#paint3_radial_336_1496)"/>
<path className="Polygon6" d="M1290 310.975L1771.51 253.975H808.49L1290 310.975Z" fill="url(#paint4_radial_336_1496)"/>
<path className="Polygon7" d="M1288 288.975L1435.22 219.225H1140.78L1288 288.975Z" fill="url(#paint5_linear_336_1496)"/>
<path className="Polygon8" d="M1288.5 310.975L1576.45 241.225H1000.55L1288.5 310.975Z" fill="url(#paint6_linear_336_1496)"/>
<path className="Polygon9" d="M1242.5 310.975L1530.45 241.225H954.547L1242.5 310.975Z" fill="url(#paint7_linear_336_1496)"/>
<path className="Polygon13" d="M1066.5 318.975L1354.45 249.225H778.547L1066.5 318.975Z" fill="url(#paint8_linear_336_1496)"/>
<path className="Polygon15" d="M1275.5 641.947L2522.14 101.987H28.8564L1275.5 641.947Z" fill="url(#paint9_radial_336_1496)"/>
<path className="Polygon14" d="M1513.5 318.975L1225.55 249.225H1801.45L1513.5 318.975Z" fill="url(#paint10_linear_336_1496)"/>
<path className="Polygon10" d="M1438.5 309.975L1150.55 240.225H1726.45L1438.5 309.975Z" fill="url(#paint11_linear_336_1496)"/>
<path className="Polygon17" d="M1399 368.975L949.533 257.975H1848.47L1399 368.975Z" fill="url(#paint12_linear_336_1496)"/>
<path className="Polygon11" d="M1561.5 309.975L1273.55 240.225H1849.45L1561.5 309.975Z" fill="url(#paint13_linear_336_1496)"/>
<path className="Polygon12" d="M1005.5 310.975L1293.45 241.225H717.547L1005.5 310.975Z" fill="url(#paint14_linear_336_1496)"/>
<path className="Polygon16" d="M1026 311.975L1541.29 242.225H510.715L1026 311.975Z" fill="url(#paint15_linear_336_1496)"/>
<g id="Vector 50" filter="url(#filter0_f_336_1496)">
<path d="M193 201.226L875.714 379.285M347.918 201.226L934.942 379.285M508.605 201.226L982.423 371.804M664.347 201.226L1059.13 379.285M821.737 201.226L1127.91 379.285M982.423 201.226L1202.42 379.285M1137.34 201.226L1254.65 381.28M1298.03 201.226V371.804M1457.89 201.226L1352.72 381.28M1615.28 201.226L1394.12 387.266M1772.67 201.226L1434.88 395.745M1929.24 201.226L1481.37 395.745M2086.63 201.226C2082.67 201.226 1646.51 362.126 1529.77 395.745M2244.02 201.226L1577.53 403.226M2408 201.226L1638.67 395.745M2408 247.928C1543.68 215.185 1059.03 215.26 193 247.928M2272.99 281.215C1556.67 247.769 1041.05 248.388 320.372 281.215M2086.63 312.515C1550.28 278.047 1071.22 279.378 488.503 312.515M610.78 347.863C1035.04 309.985 1506.21 302.974 1904.88 347.863" stroke="url(#paint16_linear_336_1496)"/>
</g>
<circle id="Ellipse 175" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 902.308 354.975)" fill="#FCFAFC"/>
<circle id="Ellipse 176" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 950.308 471.975)" fill="#FCFAFC"/>
<circle id="Ellipse 177" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1006.31 512.975)" fill="#FCFAFC"/>
<circle id="Ellipse 178" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 788.308 479.975)" fill="#FCFAFC"/>
<circle id="Ellipse 179" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1222.31 360.975)" fill="#FCFAFC"/>
<circle id="Ellipse 180" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1283.31 312.975)" fill="#FCFAFC"/>
<circle id="Ellipse 181" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1105.31 378.975)" fill="#FCFAFC"/>
<circle id="Ellipse 244" cx="2047.71" cy="221.883" r="1.5" transform="rotate(130.982 2047.71 221.883)" fill="#FCFAFC"/>
<circle id="Ellipse 249" cx="2063.96" cy="429.369" r="1.5" transform="rotate(130.982 2063.96 429.369)" fill="#FCFAFC"/>
<circle id="Ellipse 252" cx="1983.97" cy="410.885" r="1" transform="rotate(130.982 1983.97 410.885)" fill="#FCFAFC"/>
<circle id="Ellipse 254" cx="1967.3" cy="324.868" r="1" transform="rotate(130.982 1967.3 324.868)" fill="#FCFAFC"/>
<circle id="Ellipse 255" cx="2176.19" cy="311.614" r="1" transform="rotate(130.982 2176.19 311.614)" fill="#FCFAFC"/>
<circle id="Ellipse 182" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 809.308 383.975)" fill="#FCFAFC"/>
<circle id="Ellipse 183" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 842.308 378.975)" fill="#FCFAFC"/>
<circle id="Ellipse 184" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 968.308 414.975)" fill="#FCFAFC"/>
<circle id="Ellipse 185" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 720.308 242.975)" fill="#FCFAFC"/>
<circle id="Ellipse 186" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 670.308 318.975)" fill="#FCFAFC"/>
<circle id="Ellipse 187" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 727.308 379.975)" fill="#FCFAFC"/>
<circle id="Ellipse 188" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 533.775 178.71)" fill="#FCFAFC"/>
<circle id="Ellipse 189" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 832.778 409.045)" fill="#FCFAFC"/>
<circle id="Ellipse 190" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1353.6 287.237)" fill="#FCFAFC"/>
<circle id="Ellipse 191" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1246.23 342.618)" fill="#FCFAFC"/>
<circle id="Ellipse 192" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1189.6 396.393)" fill="#FCFAFC"/>
<circle id="Ellipse 193" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 517.528 386.195)" fill="#FCFAFC"/>
<circle id="Ellipse 194" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 684.368 372.395)" fill="#FCFAFC"/>
<circle id="Ellipse 195" cx="1" cy="1" r="1" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1287.82 339.941)" fill="#FCFAFC"/>
<circle id="Ellipse 196" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 598.214 367.761)" fill="#FCFAFC"/>
<circle id="Ellipse 197" cx="1" cy="1" r="1" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1275.56 454.264)" fill="#FCFAFC"/>
<circle id="Ellipse 198" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 614.889 281.744)" fill="#FCFAFC"/>
<circle id="Ellipse 199" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 406 268.49)" fill="#FCFAFC"/>
<circle id="Ellipse 200" cx="1" cy="1" r="1" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1208.87 297.849)" fill="#FCFAFC"/>
<circle id="Ellipse 201" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 669.463 463.498)" fill="#FCFAFC"/>
<circle id="Ellipse 202" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 833.104 343.854)" fill="#FCFAFC"/>
<circle id="Ellipse 203" cx="1273.81" cy="270.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 204" cx="1321.81" cy="153.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 205" cx="1377.81" cy="112.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 206" cx="1159.81" cy="145.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 207" cx="1593.81" cy="264.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 208" cx="1654.81" cy="312.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 209" cx="1476.81" cy="246.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 210" cx="1180.81" cy="241.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 211" cx="1213.81" cy="246.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 212" cx="1339.81" cy="210.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 213" cx="1091.81" cy="382.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 214" cx="1041.81" cy="306.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 215" cx="1098.81" cy="245.242" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 216" cx="906.891" cy="445.858" r="1.5" transform="rotate(-49.0176 906.891 445.858)" fill="#FCFAFC"/>
<circle id="Ellipse 217" cx="1205.89" cy="215.523" r="1.5" transform="rotate(-49.0176 1205.89 215.523)" fill="#FCFAFC"/>
<circle id="Ellipse 218" cx="1722.52" cy="337.887" r="1.5" transform="rotate(123.938 1722.52 337.887)" fill="#FCFAFC"/>
<circle id="Ellipse 219" cx="1615.15" cy="282.505" r="1.5" transform="rotate(123.938 1615.15 282.505)" fill="#FCFAFC"/>
<circle id="Ellipse 220" cx="1558.52" cy="228.731" r="1.5" transform="rotate(123.938 1558.52 228.731)" fill="#FCFAFC"/>
<circle id="Ellipse 221" cx="890.644" cy="238.372" r="1.5" transform="rotate(-49.0176 890.644 238.372)" fill="#FCFAFC"/>
<circle id="Ellipse 222" cx="1057.48" cy="252.173" r="1.5" transform="rotate(-49.0176 1057.48 252.173)" fill="#FCFAFC"/>
<circle id="Ellipse 223" cx="1657.43" cy="285.046" r="1" transform="rotate(123.938 1657.43 285.046)" fill="#FCFAFC"/>
<circle id="Ellipse 224" cx="970.625" cy="256.856" r="1" transform="rotate(-49.0176 970.625 256.856)" fill="#FCFAFC"/>
<circle id="Ellipse 225" cx="1645.17" cy="170.724" r="1" transform="rotate(123.938 1645.17 170.724)" fill="#FCFAFC"/>
<circle id="Ellipse 226" cx="987.299" cy="342.874" r="1" transform="rotate(-49.0176 987.299 342.874)" fill="#FCFAFC"/>
<circle id="Ellipse 227" cx="778.411" cy="356.127" r="1" transform="rotate(-49.0176 778.411 356.127)" fill="#FCFAFC"/>
<circle id="Ellipse 228" cx="1578.48" cy="327.139" r="1" transform="rotate(123.938 1578.48 327.139)" fill="#FCFAFC"/>
<circle id="Ellipse 229" cx="1041.87" cy="161.119" r="1" transform="rotate(-49.0176 1041.87 161.119)" fill="#FCFAFC"/>
<circle id="Ellipse 230" cx="1205.52" cy="280.764" r="1" transform="rotate(-49.0176 1205.52 280.764)" fill="#FCFAFC"/>
<circle id="Ellipse 231" cx="1680.79" cy="276.475" r="0.5" transform="rotate(180 1680.79 276.475)" fill="#FCFAFC"/>
<circle id="Ellipse 232" cx="1632.79" cy="393.475" r="0.5" transform="rotate(180 1632.79 393.475)" fill="#FCFAFC"/>
<circle id="Ellipse 233" cx="1576.79" cy="434.475" r="0.5" transform="rotate(180 1576.79 434.475)" fill="#FCFAFC"/>
<circle id="Ellipse 234" cx="1794.79" cy="401.475" r="0.5" transform="rotate(180 1794.79 401.475)" fill="#FCFAFC"/>
<circle id="Ellipse 235" cx="1360.79" cy="282.475" r="0.5" transform="rotate(180 1360.79 282.475)" fill="#FCFAFC"/>
<circle id="Ellipse 236" cx="1299.79" cy="234.475" r="0.5" transform="rotate(180 1299.79 234.475)" fill="#FCFAFC"/>
<circle id="Ellipse 237" cx="1477.79" cy="300.475" r="0.5" transform="rotate(180 1477.79 300.475)" fill="#FCFAFC"/>
<circle id="Ellipse 238" cx="1773.79" cy="305.475" r="0.5" transform="rotate(180 1773.79 305.475)" fill="#FCFAFC"/>
<circle id="Ellipse 239" cx="1740.79" cy="300.475" r="0.5" transform="rotate(180 1740.79 300.475)" fill="#FCFAFC"/>
<circle id="Ellipse 240" cx="1614.79" cy="336.475" r="0.5" transform="rotate(180 1614.79 336.475)" fill="#FCFAFC"/>
<circle id="Ellipse 241" cx="1862.79" cy="164.475" r="0.5" transform="rotate(180 1862.79 164.475)" fill="#FCFAFC"/>
<circle id="Ellipse 242" cx="1912.79" cy="240.475" r="0.5" transform="rotate(180 1912.79 240.475)" fill="#FCFAFC"/>
<circle id="Ellipse 243" cx="1855.79" cy="301.475" r="0.5" transform="rotate(180 1855.79 301.475)" fill="#FCFAFC"/>
<circle id="Ellipse 245" cx="1748.71" cy="331.194" r="1.5" transform="rotate(130.982 1748.71 331.194)" fill="#FCFAFC"/>
<circle id="Ellipse 246" cx="1232.08" cy="208.83" r="1.5" transform="rotate(-56.0617 1232.08 208.83)" fill="#FCFAFC"/>
<circle id="Ellipse 247" cx="1339.45" cy="264.211" r="1.5" transform="rotate(-56.0617 1339.45 264.211)" fill="#FCFAFC"/>
<circle id="Ellipse 248" cx="1396.08" cy="317.986" r="1.5" transform="rotate(-56.0617 1396.08 317.986)" fill="#FCFAFC"/>
<circle id="Ellipse 250" cx="1897.12" cy="294.543" r="1.5" transform="rotate(130.982 1897.12 294.543)" fill="#FCFAFC"/>
<circle id="Ellipse 251" cx="1297.17" cy="261.67" r="1" transform="rotate(-56.0617 1297.17 261.67)" fill="#FCFAFC"/>
<circle id="Ellipse 253" cx="1309.43" cy="375.992" r="1" transform="rotate(-56.0617 1309.43 375.992)" fill="#FCFAFC"/>
<circle id="Ellipse 256" cx="1376.12" cy="219.577" r="1" transform="rotate(-56.0617 1376.12 219.577)" fill="#FCFAFC"/>
<circle id="Ellipse 257" cx="1912.73" cy="385.597" r="1" transform="rotate(130.982 1912.73 385.597)" fill="#FCFAFC"/>
<circle id="Ellipse 258" cx="1749.08" cy="265.953" r="1" transform="rotate(130.982 1749.08 265.953)" fill="#FCFAFC"/>
<g id="vectorAnimation">
<path className="vectorAnimation2" d="M1298 155V478" stroke="url(#paint17_linear_336_1496)" stroke-width="2"/>
<path className="vectorAnimation1" d="M950.412 175.938L1227 400" stroke="url(#paint18_linear_336_1496)" stroke-width="2"/>
<path className="vectorAnimation3" d="M1975.83 183.331L1498.03 386.927" stroke="url(#paint19_linear_336_1496)" stroke-width="2"/>
<path className="vectorAnimation4" d="M421.988 221.51L915.012 372.443" stroke="url(#paint20_linear_336_1496)" stroke-width="2"/>
<path className="vectorAnimation5" d="M1701.4 134.456L1392.07 387.161" stroke="url(#paint21_linear_336_1496)" stroke-width="2"/>
</g>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_336_1496" x="191.874" y="199.726" width="2217.25" height="204.979" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_336_1496"/>
</filter>
<linearGradient id="paint0_linear_336_1496" x1="1276" y1="0" x2="1276" y2="876" gradientUnits="userSpaceOnUse">
<stop stop-color="#050305" stop-opacity="0"/>
<stop offset="0.214611" stop-color="white"/>
<stop offset="0.405908" stop-color="white"/>
<stop offset="0.770833" stop-color="white" stop-opacity="0.72"/>
<stop offset="1" stop-color="#050305" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint1_radial_336_1496" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1288.5 272.975) rotate(-90) scale(86.5405 1262.5)">
<stop stop-color="#22B9F4" stop-opacity="0.32"/>
<stop offset="1" stop-color="#0490D6"/>
</radialGradient>
<radialGradient id="paint2_radial_336_1496" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1288 272.975) rotate(-89.3007) scale(53.0112 770.978)">
<stop stop-color="#8F3FBC"/>
<stop offset="0.598958" stop-color="#27125E"/>
</radialGradient>
<radialGradient id="paint3_radial_336_1496" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1289.5 272.975) rotate(-89.3007) scale(38.5536 560.68)">
<stop stop-color="#C679D4"/>
<stop offset="0.598958" stop-color="#6A34A7"/>
</radialGradient>
<radialGradient id="paint4_radial_336_1496" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1290 272.975) rotate(-89.2965) scale(26.1614 382.735)">
<stop stop-color="#C977DB"/>
<stop offset="0.598958" stop-color="#7D35B2"/>
</radialGradient>
<linearGradient id="paint5_linear_336_1496" x1="1288.29" y1="317.05" x2="1285.93" y2="196.021" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_336_1496" x1="1289.06" y1="339.05" x2="1287.85" y2="217.987" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_336_1496" x1="1242.5" y1="333.475" x2="1417.1" y2="172.894" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_336_1496" x1="935.182" y1="344.475" x2="1244.53" y2="161.631" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<radialGradient id="paint9_radial_336_1496" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1458.94 380.676) rotate(-89.0988) scale(286.014 1140.84)">
<stop stop-color="#3E1652" stop-opacity="0"/>
<stop offset="1" stop-color="#3E1652"/>
</radialGradient>
<linearGradient id="paint10_linear_336_1496" x1="1644.82" y1="344.475" x2="1335.47" y2="161.631" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<linearGradient id="paint11_linear_336_1496" x1="1438.5" y1="332.475" x2="1263.9" y2="171.894" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_336_1496" x1="1399" y1="404.781" x2="1121.64" y2="154.582" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_336_1496" x1="1561.5" y1="332.475" x2="1386.9" y2="171.894" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear_336_1496" x1="1005.5" y1="333.475" x2="1180.1" y2="172.894" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_336_1496" x1="1026" y1="334.475" x2="1181.51" y2="78.5401" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear_336_1496" x1="1301.14" y1="369.31" x2="1301.14" y2="201.226" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_336_1496" x1="1298.5" y1="243.243" x2="1298.55" y2="396.332" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_336_1496" x1="1077.01" y1="202.523" x2="1106.48" y2="416.591" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear_336_1496" x1="1739.78" y1="211.742" x2="1732.97" y2="395.631" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint20_linear_336_1496" x1="688.482" y1="231.893" x2="691.963" y2="367.897" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint21_linear_336_1496" x1="1542.43" y1="182.932" x2="1553.45" y2="378.044" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>




    </>
   )
}




export const SVGAboutDown = ()=>{


   gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      gsap.to( ".SVGAboutDown",{
        duration : 10,
        scrollTrigger:{
            trigger:".SVGAboutDown",
            start: '-20% 40%',
            // end : 'bottom 100%',
            onEnter : ()=>{
              document.querySelector(".SVGAboutDown")?.classList.add("SVGAboutAnimation");
            },
            // markers: true
        }

      })
    },[])



   return(
    <>
      <svg width="2552" height="876" viewBox="0 0 2552 876" fill="none" className="SVGAboutDown mobile-none " xmlns="http://www.w3.org/2000/svg">
<g id="SVGAboutDown">
<mask id="mask0_346_1497" style={{maskType : "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="2552" height="876">
<path id="Rectangle 1010" d="M2552 876H0V-3.00407e-05H2552V876Z" fill="url(#paint0_linear_346_1497)"/>
</mask>
<g mask="url(#mask0_346_1497)">
<g id="SVGAbout">
<path className="Polygon3" d="M1263.5 516.485L170.143 646.296H2356.86L1263.5 516.485Z" fill="url(#paint1_radial_346_1497)"/>
<path className="Polygon4" d="M1264 526.025L294.052 641.525H2233.95L1264 526.025Z" fill="url(#paint2_radial_346_1497)"/>
<path className="Polygon5" d="M1262.5 547.025L557.122 631.025H1967.88L1262.5 547.025Z" fill="url(#paint3_radial_346_1497)"/>
<path className="Polygon6" d="M1262 565.025L780.49 622.025H1743.51L1262 565.025Z" fill="url(#paint4_radial_346_1497)"/>
<path className="Polygon7" d="M1264 587.025L1116.78 656.775H1411.22L1264 587.025Z" fill="url(#paint5_linear_346_1497)"/>
<path className="Polygon8" d="M1263.5 565.025L975.547 634.775H1551.45L1263.5 565.025Z" fill="url(#paint6_linear_346_1497)"/>
<path className="Polygon9" d="M1309.5 565.025L1021.55 634.775H1597.45L1309.5 565.025Z" fill="url(#paint7_linear_346_1497)"/>
<path className="Polygon13" d="M1485.5 557.025L1197.55 626.775H1773.45L1485.5 557.025Z" fill="url(#paint8_linear_346_1497)"/>
<path className="Polygon15" d="M1276.5 234.053L29.8564 774.013H2523.14L1276.5 234.053Z" fill="url(#paint9_radial_346_1497)"/>
<path className="Polygon14" d="M1038.5 557.025L1326.45 626.775H750.547L1038.5 557.025Z" fill="url(#paint10_linear_346_1497)"/>
<path className="Polygon10" d="M1113.5 566.025L1401.45 635.775H825.547L1113.5 566.025Z" fill="url(#paint11_linear_346_1497)"/>
<path className="Polygon17" d="M1153 507.025L1602.47 618.025H703.533L1153 507.025Z" fill="url(#paint12_linear_346_1497)"/>
<path className="Polygon11" d="M990.5 566.025L1278.45 635.775H702.547L990.5 566.025Z" fill="url(#paint13_linear_346_1497)"/>
<path className="Polygon12" d="M1546.5 565.025L1258.55 634.775H1834.45L1546.5 565.025Z" fill="url(#paint14_linear_346_1497)"/>
<path className="Polygon16" d="M1526 564.025L1010.71 633.775H2041.29L1526 564.025Z" fill="url(#paint15_linear_346_1497)"/>
<g id="Vector 50" filter="url(#filter0_f_346_1497)">
<path d="M2359 674.774L1676.29 496.715M2204.08 674.774L1617.06 496.715M2043.4 674.774L1569.58 504.196M1887.65 674.774L1492.87 496.715M1730.26 674.774L1424.09 496.715M1569.58 674.774L1349.58 496.715M1414.66 674.774L1297.35 494.72M1253.97 674.774V504.196M1094.11 674.774L1199.28 494.72M936.72 674.774L1157.88 488.734M779.329 674.774L1117.12 480.255M622.763 674.774L1070.63 480.255M465.373 674.774C469.328 674.774 905.492 513.874 1022.23 480.255M307.983 674.774L974.466 472.774M144 674.774L913.327 480.255M144 628.072C1008.32 660.815 1492.97 660.74 2359 628.072M279.014 594.785C995.328 628.231 1510.95 627.612 2231.63 594.785M465.373 563.485C1001.72 597.953 1480.78 596.622 2063.5 563.485M1941.22 528.137C1516.96 566.015 1045.79 573.026 647.12 528.137" stroke="url(#paint16_linear_346_1497)"/>
</g>
<circle id="Ellipse 175" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1649.69 521.025)" fill="#FCFAFC"/>
<circle id="Ellipse 176" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1601.69 404.025)" fill="#FCFAFC"/>
<circle id="Ellipse 177" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1545.69 363.025)" fill="#FCFAFC"/>
<circle id="Ellipse 178" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1763.69 396.025)" fill="#FCFAFC"/>
<circle id="Ellipse 179" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1329.69 515.025)" fill="#FCFAFC"/>
<circle id="Ellipse 180" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1268.69 563.025)" fill="#FCFAFC"/>
<circle id="Ellipse 181" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1446.69 497.025)" fill="#FCFAFC"/>
<circle id="Ellipse 244" cx="504.292" cy="654.117" r="1.5" transform="rotate(-49.0176 504.292 654.117)" fill="#FCFAFC"/>
<circle id="Ellipse 249" cx="488.045" cy="446.631" r="1.5" transform="rotate(-49.0176 488.045 446.631)" fill="#FCFAFC"/>
<circle id="Ellipse 252" cx="568.025" cy="465.115" r="1" transform="rotate(-49.0176 568.025 465.115)" fill="#FCFAFC"/>
<circle id="Ellipse 254" cx="584.7" cy="551.132" r="1" transform="rotate(-49.0176 584.7 551.132)" fill="#FCFAFC"/>
<circle id="Ellipse 255" cx="375.811" cy="564.386" r="1" transform="rotate(-49.0176 375.811 564.386)" fill="#FCFAFC"/>
<circle id="Ellipse 182" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1742.69 492.025)" fill="#FCFAFC"/>
<circle id="Ellipse 183" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1709.69 497.025)" fill="#FCFAFC"/>
<circle id="Ellipse 184" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1583.69 461.025)" fill="#FCFAFC"/>
<circle id="Ellipse 185" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1831.69 633.025)" fill="#FCFAFC"/>
<circle id="Ellipse 186" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1881.69 557.025)" fill="#FCFAFC"/>
<circle id="Ellipse 187" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1824.69 496.025)" fill="#FCFAFC"/>
<circle id="Ellipse 188" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 2018.22 697.29)" fill="#FCFAFC"/>
<circle id="Ellipse 189" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1719.22 466.955)" fill="#FCFAFC"/>
<circle id="Ellipse 190" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1198.4 588.763)" fill="#FCFAFC"/>
<circle id="Ellipse 191" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1305.77 533.382)" fill="#FCFAFC"/>
<circle id="Ellipse 192" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1362.4 479.607)" fill="#FCFAFC"/>
<circle id="Ellipse 193" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 2034.47 489.805)" fill="#FCFAFC"/>
<circle id="Ellipse 194" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1867.63 503.605)" fill="#FCFAFC"/>
<circle id="Ellipse 195" cx="1" cy="1" r="1" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1264.18 536.059)" fill="#FCFAFC"/>
<circle id="Ellipse 196" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1953.79 508.239)" fill="#FCFAFC"/>
<circle id="Ellipse 197" cx="1" cy="1" r="1" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1276.44 421.736)" fill="#FCFAFC"/>
<circle id="Ellipse 198" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1937.11 594.256)" fill="#FCFAFC"/>
<circle id="Ellipse 199" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 2146 607.51)" fill="#FCFAFC"/>
<circle id="Ellipse 200" cx="1" cy="1" r="1" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1343.13 578.151)" fill="#FCFAFC"/>
<circle id="Ellipse 201" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1882.54 412.502)" fill="#FCFAFC"/>
<circle id="Ellipse 202" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1718.9 532.146)" fill="#FCFAFC"/>
<circle id="Ellipse 203" cx="1278.19" cy="605.758" r="0.5" transform="rotate(-180 1278.19 605.758)" fill="#FCFAFC"/>
<circle id="Ellipse 204" cx="1230.19" cy="722.758" r="0.5" transform="rotate(-180 1230.19 722.758)" fill="#FCFAFC"/>
<circle id="Ellipse 205" cx="1174.19" cy="763.758" r="0.5" transform="rotate(-180 1174.19 763.758)" fill="#FCFAFC"/>
<circle id="Ellipse 206" cx="1392.19" cy="730.758" r="0.5" transform="rotate(-180 1392.19 730.758)" fill="#FCFAFC"/>
<circle id="Ellipse 207" cx="958.192" cy="611.758" r="0.5" transform="rotate(-180 958.192 611.758)" fill="#FCFAFC"/>
<circle id="Ellipse 208" cx="897.192" cy="563.759" r="0.5" transform="rotate(-180 897.192 563.759)" fill="#FCFAFC"/>
<circle id="Ellipse 209" cx="1075.19" cy="629.758" r="0.5" transform="rotate(-180 1075.19 629.758)" fill="#FCFAFC"/>
<circle id="Ellipse 210" cx="1371.19" cy="634.758" r="0.5" transform="rotate(-180 1371.19 634.758)" fill="#FCFAFC"/>
<circle id="Ellipse 211" cx="1338.19" cy="629.758" r="0.5" transform="rotate(-180 1338.19 629.758)" fill="#FCFAFC"/>
<circle id="Ellipse 212" cx="1212.19" cy="665.758" r="0.5" transform="rotate(-180 1212.19 665.758)" fill="#FCFAFC"/>
<circle id="Ellipse 213" cx="1460.19" cy="493.759" r="0.5" transform="rotate(-180 1460.19 493.759)" fill="#FCFAFC"/>
<circle id="Ellipse 214" cx="1510.19" cy="569.758" r="0.5" transform="rotate(-180 1510.19 569.758)" fill="#FCFAFC"/>
<circle id="Ellipse 215" cx="1453.19" cy="630.758" r="0.5" transform="rotate(-180 1453.19 630.758)" fill="#FCFAFC"/>
<circle id="Ellipse 216" cx="1645.11" cy="430.142" r="1.5" transform="rotate(130.982 1645.11 430.142)" fill="#FCFAFC"/>
<circle id="Ellipse 217" cx="1346.11" cy="660.477" r="1.5" transform="rotate(130.982 1346.11 660.477)" fill="#FCFAFC"/>
<circle id="Ellipse 218" cx="829.482" cy="538.114" r="1.5" transform="rotate(-56.0617 829.482 538.114)" fill="#FCFAFC"/>
<circle id="Ellipse 219" cx="936.854" cy="593.495" r="1.5" transform="rotate(-56.0617 936.854 593.495)" fill="#FCFAFC"/>
<circle id="Ellipse 220" cx="993.478" cy="647.269" r="1.5" transform="rotate(-56.0617 993.478 647.269)" fill="#FCFAFC"/>
<circle id="Ellipse 221" cx="1661.36" cy="637.628" r="1.5" transform="rotate(130.982 1661.36 637.628)" fill="#FCFAFC"/>
<circle id="Ellipse 222" cx="1494.52" cy="623.827" r="1.5" transform="rotate(130.982 1494.52 623.827)" fill="#FCFAFC"/>
<circle id="Ellipse 223" cx="894.57" cy="590.954" r="1" transform="rotate(-56.0617 894.57 590.954)" fill="#FCFAFC"/>
<circle id="Ellipse 224" cx="1581.38" cy="619.143" r="1" transform="rotate(130.982 1581.38 619.143)" fill="#FCFAFC"/>
<circle id="Ellipse 225" cx="906.832" cy="705.276" r="1" transform="rotate(-56.0617 906.832 705.276)" fill="#FCFAFC"/>
<circle id="Ellipse 226" cx="1564.7" cy="533.126" r="1" transform="rotate(130.982 1564.7 533.126)" fill="#FCFAFC"/>
<circle id="Ellipse 227" cx="1773.59" cy="519.872" r="1" transform="rotate(130.982 1773.59 519.872)" fill="#FCFAFC"/>
<circle id="Ellipse 228" cx="973.52" cy="548.86" r="1" transform="rotate(-56.0617 973.52 548.86)" fill="#FCFAFC"/>
<circle id="Ellipse 229" cx="1510.13" cy="714.881" r="1" transform="rotate(130.982 1510.13 714.881)" fill="#FCFAFC"/>
<circle id="Ellipse 230" cx="1346.48" cy="595.236" r="1" transform="rotate(130.982 1346.48 595.236)" fill="#FCFAFC"/>
<circle id="Ellipse 231" cx="871.208" cy="599.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 232" cx="919.208" cy="482.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 233" cx="975.208" cy="441.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 234" cx="757.208" cy="474.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 235" cx="1191.21" cy="593.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 236" cx="1252.21" cy="641.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 237" cx="1074.21" cy="575.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 238" cx="778.208" cy="570.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 239" cx="811.208" cy="575.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 240" cx="937.208" cy="539.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 241" cx="689.208" cy="711.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 242" cx="639.208" cy="635.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 243" cx="696.208" cy="574.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 245" cx="803.295" cy="544.806" r="1.5" transform="rotate(-49.0176 803.295 544.806)" fill="#FCFAFC"/>
<circle id="Ellipse 246" cx="1319.92" cy="667.17" r="1.5" transform="rotate(123.938 1319.92 667.17)" fill="#FCFAFC"/>
<circle id="Ellipse 247" cx="1212.55" cy="611.789" r="1.5" transform="rotate(123.938 1212.55 611.789)" fill="#FCFAFC"/>
<circle id="Ellipse 248" cx="1155.92" cy="558.014" r="1.5" transform="rotate(123.938 1155.92 558.014)" fill="#FCFAFC"/>
<circle id="Ellipse 250" cx="654.885" cy="581.457" r="1.5" transform="rotate(-49.0176 654.885 581.457)" fill="#FCFAFC"/>
<circle id="Ellipse 251" cx="1254.83" cy="614.33" r="1" transform="rotate(123.938 1254.83 614.33)" fill="#FCFAFC"/>
<circle id="Ellipse 253" cx="1242.57" cy="500.008" r="1" transform="rotate(123.938 1242.57 500.008)" fill="#FCFAFC"/>
<circle id="Ellipse 256" cx="1175.88" cy="656.423" r="1" transform="rotate(123.938 1175.88 656.423)" fill="#FCFAFC"/>
<circle id="Ellipse 257" cx="639.274" cy="490.403" r="1" transform="rotate(-49.0176 639.274 490.403)" fill="#FCFAFC"/>
<circle id="Ellipse 258" cx="802.916" cy="610.047" r="1" transform="rotate(-49.0176 802.916 610.047)" fill="#FCFAFC"/>
<g id="vectorAnimation">
<path className="vectorAnimation2" d="M1254 721V398" stroke="url(#paint17_linear_346_1497)" stroke-width="2"/>
<path className="vectorAnimation1" d="M1601.59 700.062L1325 476" stroke="url(#paint18_linear_346_1497)" stroke-width="2"/>
<path className="vectorAnimation3" d="M576.171 692.669L1053.97 489.073" stroke="url(#paint19_linear_346_1497)" stroke-width="2"/>
<path className="vectorAnimation4" d="M2130.01 654.49L1636.99 503.557" stroke="url(#paint20_linear_346_1497)" stroke-width="2"/>
<path className="vectorAnimation5" d="M850.596 741.544L1159.93 488.839" stroke="url(#paint21_linear_346_1497)" stroke-width="2"/>
</g>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_346_1497" x="142.877" y="471.295" width="2217.25" height="204.979" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_346_1497"/>
</filter>
<linearGradient id="paint0_linear_346_1497" x1="1276" y1="876" x2="1276" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#050305" stop-opacity="0"/>
<stop offset="0.214611" stop-color="white"/>
<stop offset="0.405908" stop-color="white"/>
<stop offset="0.770833" stop-color="white" stop-opacity="0.72"/>
<stop offset="1" stop-color="#050305" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint1_radial_346_1497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1263.5 603.025) rotate(90) scale(86.5405 1262.5)">
<stop stop-color="#22B9F4" stop-opacity="0.32"/>
<stop offset="1" stop-color="#0490D6"/>
</radialGradient>
<radialGradient id="paint2_radial_346_1497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1264 603.025) rotate(90.6993) scale(53.0112 770.978)">
<stop stop-color="#8F3FBC"/>
<stop offset="0.598958" stop-color="#27125E"/>
</radialGradient>
<radialGradient id="paint3_radial_346_1497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1262.5 603.025) rotate(90.6993) scale(38.5536 560.68)">
<stop stop-color="#C679D4"/>
<stop offset="0.598958" stop-color="#6A34A7"/>
</radialGradient>
<radialGradient id="paint4_radial_346_1497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1262 603.025) rotate(90.7035) scale(26.1614 382.735)">
<stop stop-color="#C977DB"/>
<stop offset="0.598958" stop-color="#7D35B2"/>
</radialGradient>
<linearGradient id="paint5_linear_346_1497" x1="1263.71" y1="558.95" x2="1266.07" y2="679.979" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_346_1497" x1="1262.94" y1="536.95" x2="1264.15" y2="658.013" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_346_1497" x1="1309.5" y1="542.525" x2="1134.9" y2="703.106" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_346_1497" x1="1616.82" y1="531.525" x2="1307.47" y2="714.369" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<radialGradient id="paint9_radial_346_1497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1093.06 495.324) rotate(90.9012) scale(286.014 1140.84)">
<stop stop-color="#3E1652" stop-opacity="0"/>
<stop offset="1" stop-color="#3E1652"/>
</radialGradient>
<linearGradient id="paint10_linear_346_1497" x1="907.182" y1="531.525" x2="1216.53" y2="714.369" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<linearGradient id="paint11_linear_346_1497" x1="1113.5" y1="543.525" x2="1288.1" y2="704.106" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_346_1497" x1="1153" y1="471.219" x2="1430.36" y2="721.418" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_346_1497" x1="990.5" y1="543.525" x2="1165.1" y2="704.106" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear_346_1497" x1="1546.5" y1="542.525" x2="1371.9" y2="703.106" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_346_1497" x1="1526" y1="541.525" x2="1370.49" y2="797.46" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear_346_1497" x1="1250.86" y1="506.69" x2="1250.86" y2="674.774" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_346_1497" x1="1253.5" y1="632.757" x2="1253.45" y2="479.668" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_346_1497" x1="1474.99" y1="673.477" x2="1445.52" y2="459.409" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear_346_1497" x1="812.216" y1="664.258" x2="819.029" y2="480.369" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint20_linear_346_1497" x1="1863.52" y1="644.107" x2="1860.04" y2="508.103" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint21_linear_346_1497" x1="1009.57" y1="693.068" x2="998.549" y2="497.956" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>




    </>
   )
}






export const SVGAboutUpMobile = ()=>{


   gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      gsap.to( ".SVGAboutUpMobile",{
        duration : 10,
        scrollTrigger:{
            trigger:".SVGAboutUpMobile",
            start: '-20% 40%',
            // end : 'bottom 100%',
            onEnter : ()=>{
              document.querySelector(".SVGAboutUpMobile")?.classList.add("SVGAboutAnimation");
            },
            // markers: true
        }

      })
    },[])


   return(
    <>
     <svg width="2552" height="876" viewBox="0 0 2552 876" className="SVGAboutUp SVGAboutUpMobile desktop-none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGAboutUpMobile">
<mask id="mask0_401_2630" style={{maskType : "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="2552" height="876">
<path id="Rectangle 1010" d="M0 0H2552V876H0V0Z" fill="url(#paint0_linear_401_2630)"/>
</mask>
<g mask="url(#mask0_401_2630)">
<g id="SVGAbout">
<path className="Polygon3" d="M1288.5 492L2381.86 151.5H195.143L1288.5 492Z" fill="url(#paint1_radial_401_2630)"/>
<path className="Polygon4" d="M1288 467L2257.95 164H318.052L1288 467Z" fill="url(#paint2_radial_401_2630)"/>
<path className="Polygon5" d="M1289.5 412L1994.88 191.5H584.122L1289.5 412Z" fill="url(#paint3_radial_401_2630)"/>
<path className="Polygon6" d="M1290 365L1771.51 215.75H808.49L1290 365Z" fill="url(#paint4_radial_401_2630)"/>
<path className="Polygon7" d="M1288 307L1435.22 124H1140.78L1288 307Z" fill="url(#paint5_linear_401_2630)"/>
<path className="Polygon8" d="M1288.5 365L1576.45 182H1000.55L1288.5 365Z" fill="url(#paint6_linear_401_2630)"/>
<path className="Polygon9" d="M1242.5 365L1530.45 182H954.547L1242.5 365Z" fill="url(#paint7_linear_401_2630)"/>
<path className="Polygon13" d="M1066.5 386L1354.45 203H778.547L1066.5 386Z" fill="url(#paint8_linear_401_2630)"/>
<path className="Polygon15" d="M1275.5 903L2522.14 -28.5H28.8564L1275.5 903Z" fill="url(#paint9_radial_401_2630)"/>
<path className="Polygon14" d="M1513.5 386L1225.55 203H1801.45L1513.5 386Z" fill="url(#paint10_linear_401_2630)"/>
<path className="Polygon10" d="M1438.5 362L1150.55 179H1726.45L1438.5 362Z" fill="url(#paint11_linear_401_2630)"/>
<path className="Polygon17" d="M1399 517L949.533 226H1848.47L1399 517Z" fill="url(#paint12_linear_401_2630)"/>
<path className="Polygon11" d="M1561.5 362L1273.55 179H1849.45L1561.5 362Z" fill="url(#paint13_linear_401_2630)"/>
<path className="Polygon12" d="M1005.5 365L1293.45 182H717.547L1005.5 365Z" fill="url(#paint14_linear_401_2630)"/>
<path className="Polygon16" d="M1026 311.975L1541.29 242.225H510.715L1026 311.975Z" fill="url(#paint15_linear_401_2630)"/>
<g id="Vector 50" filter="url(#filter0_f_401_2630)">
<path d="M66 201L827.003 486.6M238.683 201L893.023 486.6M417.796 201L945.949 474.6M591.397 201L1031.45 486.6M766.836 201L1108.12 486.6M945.949 201L1191.18 486.6M1118.63 201L1249.39 489.8M1297.74 201V474.6M1475.94 201L1358.71 489.8M1651.38 201L1404.85 499.4M1826.82 201L1450.29 513M2001.34 201L1502.11 513M2176.77 201C2172.37 201 1686.19 459.077 1556.06 513M2352.21 201L1609.3 525M2535 201L1677.45 513M2535 275.907C1571.57 223.389 1031.34 223.51 66 275.907M2384.5 329.299C1586.05 275.653 1011.3 276.647 207.978 329.299M2176.77 379.503C1578.93 324.217 1044.93 326.352 395.389 379.503M531.688 436.2C1004.59 375.445 1529.79 364.2 1974.19 436.2" stroke="url(#paint16_linear_401_2630)"/>
</g>
<circle id="Ellipse 175" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 902.308 354.975)" fill="#FCFAFC"/>
<circle id="Ellipse 176" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 950.308 471.975)" fill="#FCFAFC"/>
<circle id="Ellipse 177" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1006.31 512.975)" fill="#FCFAFC"/>
<circle id="Ellipse 178" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 788.308 479.975)" fill="#FCFAFC"/>
<circle id="Ellipse 179" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1222.31 360.975)" fill="#FCFAFC"/>
<circle id="Ellipse 180" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1283.31 312.975)" fill="#FCFAFC"/>
<circle id="Ellipse 181" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 1105.31 378.975)" fill="#FCFAFC"/>
<circle id="Ellipse 244" cx="2047.71" cy="221.884" r="1.5" transform="rotate(130.982 2047.71 221.884)" fill="#FCFAFC"/>
<circle id="Ellipse 249" cx="2063.96" cy="429.369" r="1.5" transform="rotate(130.982 2063.96 429.369)" fill="#FCFAFC"/>
<circle id="Ellipse 252" cx="1983.97" cy="410.885" r="1" transform="rotate(130.982 1983.97 410.885)" fill="#FCFAFC"/>
<circle id="Ellipse 254" cx="1967.3" cy="324.869" r="1" transform="rotate(130.982 1967.3 324.869)" fill="#FCFAFC"/>
<circle id="Ellipse 255" cx="2176.19" cy="311.615" r="1" transform="rotate(130.982 2176.19 311.615)" fill="#FCFAFC"/>
<circle id="Ellipse 182" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 809.308 383.975)" fill="#FCFAFC"/>
<circle id="Ellipse 183" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 842.308 378.975)" fill="#FCFAFC"/>
<circle id="Ellipse 184" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 968.308 414.975)" fill="#FCFAFC"/>
<circle id="Ellipse 185" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 720.308 242.975)" fill="#FCFAFC"/>
<circle id="Ellipse 186" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 670.308 318.975)" fill="#FCFAFC"/>
<circle id="Ellipse 187" cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 727.308 379.975)" fill="#FCFAFC"/>
<circle id="Ellipse 188" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 533.775 178.71)" fill="#FCFAFC"/>
<circle id="Ellipse 189" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 832.778 409.045)" fill="#FCFAFC"/>
<circle id="Ellipse 190" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1353.6 287.236)" fill="#FCFAFC"/>
<circle id="Ellipse 191" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1246.23 342.618)" fill="#FCFAFC"/>
<circle id="Ellipse 192" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1189.6 396.393)" fill="#FCFAFC"/>
<circle id="Ellipse 193" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 517.528 386.195)" fill="#FCFAFC"/>
<circle id="Ellipse 194" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.655827 0.754911 0.754911 -0.655827 684.368 372.395)" fill="#FCFAFC"/>
<circle id="Ellipse 195" cx="1" cy="1" r="1" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1287.82 339.941)" fill="#FCFAFC"/>
<circle id="Ellipse 196" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 598.214 367.761)" fill="#FCFAFC"/>
<circle id="Ellipse 197" cx="1" cy="1" r="1" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1275.56 454.264)" fill="#FCFAFC"/>
<circle id="Ellipse 198" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 614.889 281.743)" fill="#FCFAFC"/>
<circle id="Ellipse 199" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 406 268.489)" fill="#FCFAFC"/>
<circle id="Ellipse 200" cx="1" cy="1" r="1" transform="matrix(-0.5583 -0.829639 -0.829639 0.5583 1208.87 297.849)" fill="#FCFAFC"/>
<circle id="Ellipse 201" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 669.463 463.498)" fill="#FCFAFC"/>
<circle id="Ellipse 202" cx="1" cy="1" r="1" transform="matrix(0.655827 0.754911 0.754911 -0.655827 833.104 343.854)" fill="#FCFAFC"/>
<circle id="Ellipse 203" cx="1273.81" cy="270.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 204" cx="1321.81" cy="153.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 205" cx="1377.81" cy="112.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 206" cx="1159.81" cy="145.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 207" cx="1593.81" cy="264.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 208" cx="1654.81" cy="312.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 209" cx="1476.81" cy="246.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 210" cx="1180.81" cy="241.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 211" cx="1213.81" cy="246.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 212" cx="1339.81" cy="210.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 213" cx="1091.81" cy="382.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 214" cx="1041.81" cy="306.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 215" cx="1098.81" cy="245.241" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 216" cx="906.891" cy="445.858" r="1.5" transform="rotate(-49.0176 906.891 445.858)" fill="#FCFAFC"/>
<circle id="Ellipse 217" cx="1205.89" cy="215.522" r="1.5" transform="rotate(-49.0176 1205.89 215.522)" fill="#FCFAFC"/>
<circle id="Ellipse 218" cx="1722.52" cy="337.887" r="1.5" transform="rotate(123.938 1722.52 337.887)" fill="#FCFAFC"/>
<circle id="Ellipse 219" cx="1615.15" cy="282.505" r="1.5" transform="rotate(123.938 1615.15 282.505)" fill="#FCFAFC"/>
<circle id="Ellipse 220" cx="1558.52" cy="228.73" r="1.5" transform="rotate(123.938 1558.52 228.73)" fill="#FCFAFC"/>
<circle id="Ellipse 221" cx="890.644" cy="238.372" r="1.5" transform="rotate(-49.0176 890.644 238.372)" fill="#FCFAFC"/>
<circle id="Ellipse 222" cx="1057.48" cy="252.173" r="1.5" transform="rotate(-49.0176 1057.48 252.173)" fill="#FCFAFC"/>
<circle id="Ellipse 223" cx="1657.43" cy="285.046" r="1" transform="rotate(123.938 1657.43 285.046)" fill="#FCFAFC"/>
<circle id="Ellipse 224" cx="970.625" cy="256.856" r="1" transform="rotate(-49.0176 970.625 256.856)" fill="#FCFAFC"/>
<circle id="Ellipse 225" cx="1645.17" cy="170.723" r="1" transform="rotate(123.938 1645.17 170.723)" fill="#FCFAFC"/>
<circle id="Ellipse 226" cx="987.299" cy="342.874" r="1" transform="rotate(-49.0176 987.299 342.874)" fill="#FCFAFC"/>
<circle id="Ellipse 227" cx="778.411" cy="356.127" r="1" transform="rotate(-49.0176 778.411 356.127)" fill="#FCFAFC"/>
<circle id="Ellipse 228" cx="1578.48" cy="327.139" r="1" transform="rotate(123.938 1578.48 327.139)" fill="#FCFAFC"/>
<circle id="Ellipse 229" cx="1041.87" cy="161.119" r="1" transform="rotate(-49.0176 1041.87 161.119)" fill="#FCFAFC"/>
<circle id="Ellipse 230" cx="1205.52" cy="280.763" r="1" transform="rotate(-49.0176 1205.52 280.763)" fill="#FCFAFC"/>
<circle id="Ellipse 231" cx="1680.79" cy="276.475" r="0.5" transform="rotate(180 1680.79 276.475)" fill="#FCFAFC"/>
<circle id="Ellipse 232" cx="1632.79" cy="393.475" r="0.5" transform="rotate(180 1632.79 393.475)" fill="#FCFAFC"/>
<circle id="Ellipse 233" cx="1576.79" cy="434.475" r="0.5" transform="rotate(180 1576.79 434.475)" fill="#FCFAFC"/>
<circle id="Ellipse 234" cx="1794.79" cy="401.475" r="0.5" transform="rotate(180 1794.79 401.475)" fill="#FCFAFC"/>
<circle id="Ellipse 235" cx="1360.79" cy="282.475" r="0.5" transform="rotate(180 1360.79 282.475)" fill="#FCFAFC"/>
<circle id="Ellipse 236" cx="1299.79" cy="234.475" r="0.5" transform="rotate(180 1299.79 234.475)" fill="#FCFAFC"/>
<circle id="Ellipse 237" cx="1477.79" cy="300.475" r="0.5" transform="rotate(180 1477.79 300.475)" fill="#FCFAFC"/>
<circle id="Ellipse 238" cx="1773.79" cy="305.475" r="0.5" transform="rotate(180 1773.79 305.475)" fill="#FCFAFC"/>
<circle id="Ellipse 239" cx="1740.79" cy="300.475" r="0.5" transform="rotate(180 1740.79 300.475)" fill="#FCFAFC"/>
<circle id="Ellipse 240" cx="1614.79" cy="336.475" r="0.5" transform="rotate(180 1614.79 336.475)" fill="#FCFAFC"/>
<circle id="Ellipse 241" cx="1862.79" cy="164.475" r="0.5" transform="rotate(180 1862.79 164.475)" fill="#FCFAFC"/>
<circle id="Ellipse 242" cx="1912.79" cy="240.475" r="0.5" transform="rotate(180 1912.79 240.475)" fill="#FCFAFC"/>
<circle id="Ellipse 243" cx="1855.79" cy="301.475" r="0.5" transform="rotate(180 1855.79 301.475)" fill="#FCFAFC"/>
<circle id="Ellipse 245" cx="1748.71" cy="331.194" r="1.5" transform="rotate(130.982 1748.71 331.194)" fill="#FCFAFC"/>
<circle id="Ellipse 246" cx="1232.08" cy="208.829" r="1.5" transform="rotate(-56.0617 1232.08 208.829)" fill="#FCFAFC"/>
<circle id="Ellipse 247" cx="1339.45" cy="264.211" r="1.5" transform="rotate(-56.0617 1339.45 264.211)" fill="#FCFAFC"/>
<circle id="Ellipse 248" cx="1396.08" cy="317.986" r="1.5" transform="rotate(-56.0617 1396.08 317.986)" fill="#FCFAFC"/>
<circle id="Ellipse 250" cx="1897.12" cy="294.543" r="1.5" transform="rotate(130.982 1897.12 294.543)" fill="#FCFAFC"/>
<circle id="Ellipse 251" cx="1297.17" cy="261.67" r="1" transform="rotate(-56.0617 1297.17 261.67)" fill="#FCFAFC"/>
<circle id="Ellipse 253" cx="1309.43" cy="375.992" r="1" transform="rotate(-56.0617 1309.43 375.992)" fill="#FCFAFC"/>
<circle id="Ellipse 256" cx="1376.12" cy="219.576" r="1" transform="rotate(-56.0617 1376.12 219.576)" fill="#FCFAFC"/>
<circle id="Ellipse 257" cx="1912.73" cy="385.597" r="1" transform="rotate(130.982 1912.73 385.597)" fill="#FCFAFC"/>
<circle id="Ellipse 258" cx="1749.08" cy="265.953" r="1" transform="rotate(130.982 1749.08 265.953)" fill="#FCFAFC"/>
<g id="vectorAnimation">
<path className="vectorAnimation2" d="M1298 155L1298 562" stroke="url(#paint17_linear_401_2630)" stroke-width="2"/>
<path className="vectorAnimation1" d="M924.6 182.163L1263.85 437.504" stroke="url(#paint18_linear_401_2630)" stroke-width="2"/>
<path className="vectorAnimation3" d="M2049.03 182.442L1359.81 451.264" stroke="url(#paint19_linear_401_2630)" stroke-width="2"/>
<path className="vectorAnimation4" d="M417 203L1081.35 411.223" stroke="url(#paint20_linear_401_2630)" stroke-width="2"/>
<path className="vectorAnimation5" d="M1720.84 146.009L1346 431" stroke="url(#paint21_linear_401_2630)" stroke-width="2"/>
</g>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_401_2630" x="64.8242" y="199.5" width="2471.35" height="326.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_401_2630"/>
</filter>
<linearGradient id="paint0_linear_401_2630" x1="1276" y1="0" x2="1276" y2="876" gradientUnits="userSpaceOnUse">
<stop stop-color="#050305" stop-opacity="0"/>
<stop offset="0.214611" stop-color="white"/>
<stop offset="0.405908" stop-color="white"/>
<stop offset="0.770833" stop-color="white" stop-opacity="0.72"/>
<stop offset="1" stop-color="#050305" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint1_radial_401_2630" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1288.5 265) rotate(-90) scale(227 1262.5)">
<stop stop-color="#22B9F4" stop-opacity="0.32"/>
<stop offset="1" stop-color="#0490D6"/>
</radialGradient>
<radialGradient id="paint2_radial_401_2630" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1288 265) rotate(-89.7334) scale(139.059 771.028)">
<stop stop-color="#8F3FBC"/>
<stop offset="0.598958" stop-color="#27125E"/>
</radialGradient>
<radialGradient id="paint3_radial_401_2630" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1289.5 265) rotate(-89.7336) scale(101.197 560.716)">
<stop stop-color="#C679D4"/>
<stop offset="0.598958" stop-color="#6A34A7"/>
</radialGradient>
<radialGradient id="paint4_radial_401_2630" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1290 265.5) rotate(-89.7313) scale(68.4971 382.76)">
<stop stop-color="#C977DB"/>
<stop offset="0.598958" stop-color="#7D35B2"/>
</radialGradient>
<linearGradient id="paint5_linear_401_2630" x1="1288.29" y1="380.66" x2="1272.07" y2="63.8303" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_401_2630" x1="1289.06" y1="438.66" x2="1280.75" y2="121.217" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_401_2630" x1="1242.5" y1="424.032" x2="1529.52" y2="323.42" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_401_2630" x1="935.182" y1="452.903" x2="1332.44" y2="363.408" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<radialGradient id="paint9_radial_401_2630" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1458.94 452.274) rotate(-89.4776) scale(493.37 1140.93)">
<stop stop-color="#3E1652" stop-opacity="0"/>
<stop offset="1" stop-color="#3E1652"/>
</radialGradient>
<linearGradient id="paint10_linear_401_2630" x1="1644.82" y1="452.903" x2="1247.56" y2="363.408" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<linearGradient id="paint11_linear_401_2630" x1="1438.5" y1="421.032" x2="1151.48" y2="320.42" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_401_2630" x1="1399" y1="610.871" x2="949.199" y2="456.098" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_401_2630" x1="1561.5" y1="421.032" x2="1274.48" y2="320.42" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear_401_2630" x1="1005.5" y1="424.032" x2="1292.52" y2="323.42" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_401_2630" x1="1026" y1="334.475" x2="1181.51" y2="78.5401" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear_401_2630" x1="1301.21" y1="470.6" x2="1301.21" y2="201" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_401_2630" x1="1298.5" y1="266.191" x2="1298.58" y2="459.093" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_401_2630" x1="1076.65" y1="208.47" x2="1120.89" y2="462.407" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear_401_2630" x1="1711.71" y1="212.495" x2="1693.92" y2="474.004" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint20_linear_401_2630" x1="776.048" y1="217.503" x2="780.843" y2="404.793" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint21_linear_401_2630" x1="1514.04" y1="188.807" x2="1518.95" y2="419.194" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>






    </>
   )
}




export const SVGAboutDownMobile = ()=>{

   gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      gsap.to( ".SVGAboutDownMobile",{
        duration : 10,
        scrollTrigger:{
            trigger:".SVGAboutDownMobile",
            start: '-60% 40%',
            // end : 'bottom 100%',
            onEnter : ()=>{
              document.querySelector(".SVGAboutDownMobile")?.classList.add("SVGAboutAnimation");
            },
            // markers: true
        }

      })
    },[])


   return(
    <>
      <svg width="2552" height="876" viewBox="0 0 2552 876" className="SVGAboutDown SVGAboutDownMobile desktop-none" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGAboutDownMobile">
<mask id="mask0_397_2521" style={{maskType : "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="2552" height="876">
<path id="Rectangle 1010" d="M2552 876H0V-3.00407e-05H2552V876Z" fill="url(#paint0_linear_397_2521)"/>
</mask>
<g mask="url(#mask0_397_2521)">
<g id="SVGAbout">
<path className="Polygon3" d="M1263.5 384L170.143 724.5H2356.86L1263.5 384Z" fill="url(#paint1_radial_397_2521)"/>
<path className="Polygon4" d="M1264 409L294.052 712H2233.95L1264 409Z" fill="url(#paint2_radial_397_2521)"/>
<path className="Polygon5" d="M1262.5 464L557.122 684.5H1967.88L1262.5 464Z" fill="url(#paint3_radial_397_2521)"/>
<path className="Polygon6" d="M1262 511L780.49 660.25H1743.51L1262 511Z" fill="url(#paint4_radial_397_2521)"/>
<path className="Polygon7" d="M1264 569L1116.78 752H1411.22L1264 569Z" fill="url(#paint5_linear_397_2521)"/>
<path className="Polygon8" d="M1263.5 511L975.547 694H1551.45L1263.5 511Z" fill="url(#paint6_linear_397_2521)"/>
<path className="Polygon9" d="M1309.5 511L1021.55 694H1597.45L1309.5 511Z" fill="url(#paint7_linear_397_2521)"/>
<path className="Polygon13" d="M1485.5 490L1197.55 673H1773.45L1485.5 490Z" fill="url(#paint8_linear_397_2521)"/>
<path className="Polygon15" d="M1276.5 -27L29.8564 904.5H2523.14L1276.5 -27Z" fill="url(#paint9_radial_397_2521)"/>
<path className="Polygon14" d="M1038.5 490L1326.45 673H750.547L1038.5 490Z" fill="url(#paint10_linear_397_2521)"/>
<path className="Polygon10" d="M1113.5 514L1401.45 697H825.547L1113.5 514Z" fill="url(#paint11_linear_397_2521)"/>
<path className="Polygon17" d="M1153 359L1602.47 650H703.533L1153 359Z" fill="url(#paint12_linear_397_2521)"/>
<path className="Polygon11" d="M990.5 514L1278.45 697H702.547L990.5 514Z" fill="url(#paint13_linear_397_2521)"/>
<path className="Polygon12" d="M1546.5 511L1258.55 694H1834.45L1546.5 511Z" fill="url(#paint14_linear_397_2521)"/>
<path className="Polygon16" d="M1526 564.025L1010.71 633.775H2041.29L1526 564.025Z" fill="url(#paint15_linear_397_2521)"/>
<g id="Vector 50" filter="url(#filter0_f_397_2521)">
<path d="M2486 675L1725 389.4M2313.32 675L1658.98 389.4M2134.2 675L1606.05 401.4M1960.6 675L1520.55 389.4M1785.16 675L1443.88 389.4M1606.05 675L1360.82 389.4M1433.37 675L1302.61 386.2M1254.26 675V401.4M1076.06 675L1193.29 386.2M900.623 675L1147.15 376.6M725.184 675L1101.71 363M550.664 675L1049.89 363M375.226 675C379.634 675 865.815 416.923 995.939 363M199.787 675L942.698 351M17.0001 675L874.548 363M17.0001 600.093C980.432 652.611 1520.66 652.49 2486 600.093M167.497 546.701C965.952 600.347 1540.7 599.353 2344.02 546.701M375.226 496.497C973.073 551.783 1507.07 549.648 2156.61 496.497M2020.31 439.8C1547.41 500.555 1022.21 511.8 577.814 439.8" stroke="url(#paint16_linear_397_2521)"/>
</g>
<circle id="Ellipse 175" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1649.69 521.025)" fill="#FCFAFC"/>
<circle id="Ellipse 176" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1601.69 404.025)" fill="#FCFAFC"/>
<circle id="Ellipse 177" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1545.69 363.025)" fill="#FCFAFC"/>
<circle id="Ellipse 178" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1763.69 396.025)" fill="#FCFAFC"/>
<circle id="Ellipse 179" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1329.69 515.025)" fill="#FCFAFC"/>
<circle id="Ellipse 180" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1268.69 563.025)" fill="#FCFAFC"/>
<circle id="Ellipse 181" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1446.69 497.025)" fill="#FCFAFC"/>
<circle id="Ellipse 244" cx="504.292" cy="654.116" r="1.5" transform="rotate(-49.0176 504.292 654.116)" fill="#FCFAFC"/>
<circle id="Ellipse 249" cx="488.045" cy="446.631" r="1.5" transform="rotate(-49.0176 488.045 446.631)" fill="#FCFAFC"/>
<circle id="Ellipse 252" cx="568.025" cy="465.115" r="1" transform="rotate(-49.0176 568.025 465.115)" fill="#FCFAFC"/>
<circle id="Ellipse 254" cx="584.7" cy="551.131" r="1" transform="rotate(-49.0176 584.7 551.131)" fill="#FCFAFC"/>
<circle id="Ellipse 255" cx="375.811" cy="564.385" r="1" transform="rotate(-49.0176 375.811 564.385)" fill="#FCFAFC"/>
<circle id="Ellipse 182" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1742.69 492.025)" fill="#FCFAFC"/>
<circle id="Ellipse 183" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1709.69 497.025)" fill="#FCFAFC"/>
<circle id="Ellipse 184" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1583.69 461.025)" fill="#FCFAFC"/>
<circle id="Ellipse 185" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1831.69 633.025)" fill="#FCFAFC"/>
<circle id="Ellipse 186" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1881.69 557.025)" fill="#FCFAFC"/>
<circle id="Ellipse 187" cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 1824.69 496.025)" fill="#FCFAFC"/>
<circle id="Ellipse 188" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 2018.22 697.29)" fill="#FCFAFC"/>
<circle id="Ellipse 189" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1719.22 466.955)" fill="#FCFAFC"/>
<circle id="Ellipse 190" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1198.4 588.764)" fill="#FCFAFC"/>
<circle id="Ellipse 191" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1305.77 533.382)" fill="#FCFAFC"/>
<circle id="Ellipse 192" cx="1.5" cy="1.5" r="1.5" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1362.4 479.607)" fill="#FCFAFC"/>
<circle id="Ellipse 193" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 2034.47 489.805)" fill="#FCFAFC"/>
<circle id="Ellipse 194" cx="1.5" cy="1.5" r="1.5" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1867.63 503.605)" fill="#FCFAFC"/>
<circle id="Ellipse 195" cx="1" cy="1" r="1" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1264.18 536.059)" fill="#FCFAFC"/>
<circle id="Ellipse 196" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1953.79 508.239)" fill="#FCFAFC"/>
<circle id="Ellipse 197" cx="1" cy="1" r="1" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1276.44 421.736)" fill="#FCFAFC"/>
<circle id="Ellipse 198" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1937.11 594.257)" fill="#FCFAFC"/>
<circle id="Ellipse 199" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 2146 607.511)" fill="#FCFAFC"/>
<circle id="Ellipse 200" cx="1" cy="1" r="1" transform="matrix(0.5583 0.829639 0.829639 -0.5583 1343.13 578.151)" fill="#FCFAFC"/>
<circle id="Ellipse 201" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1882.54 412.502)" fill="#FCFAFC"/>
<circle id="Ellipse 202" cx="1" cy="1" r="1" transform="matrix(-0.655827 -0.754911 -0.754911 0.655827 1718.9 532.146)" fill="#FCFAFC"/>
<circle id="Ellipse 203" cx="1278.19" cy="605.759" r="0.5" transform="rotate(-180 1278.19 605.759)" fill="#FCFAFC"/>
<circle id="Ellipse 204" cx="1230.19" cy="722.759" r="0.5" transform="rotate(-180 1230.19 722.759)" fill="#FCFAFC"/>
<circle id="Ellipse 205" cx="1174.19" cy="763.759" r="0.5" transform="rotate(-180 1174.19 763.759)" fill="#FCFAFC"/>
<circle id="Ellipse 206" cx="1392.19" cy="730.759" r="0.5" transform="rotate(-180 1392.19 730.759)" fill="#FCFAFC"/>
<circle id="Ellipse 207" cx="958.192" cy="611.759" r="0.5" transform="rotate(-180 958.192 611.759)" fill="#FCFAFC"/>
<circle id="Ellipse 208" cx="897.192" cy="563.759" r="0.5" transform="rotate(-180 897.192 563.759)" fill="#FCFAFC"/>
<circle id="Ellipse 209" cx="1075.19" cy="629.759" r="0.5" transform="rotate(-180 1075.19 629.759)" fill="#FCFAFC"/>
<circle id="Ellipse 210" cx="1371.19" cy="634.759" r="0.5" transform="rotate(-180 1371.19 634.759)" fill="#FCFAFC"/>
<circle id="Ellipse 211" cx="1338.19" cy="629.759" r="0.5" transform="rotate(-180 1338.19 629.759)" fill="#FCFAFC"/>
<circle id="Ellipse 212" cx="1212.19" cy="665.759" r="0.5" transform="rotate(-180 1212.19 665.759)" fill="#FCFAFC"/>
<circle id="Ellipse 213" cx="1460.19" cy="493.759" r="0.5" transform="rotate(-180 1460.19 493.759)" fill="#FCFAFC"/>
<circle id="Ellipse 214" cx="1510.19" cy="569.759" r="0.5" transform="rotate(-180 1510.19 569.759)" fill="#FCFAFC"/>
<circle id="Ellipse 215" cx="1453.19" cy="630.759" r="0.5" transform="rotate(-180 1453.19 630.759)" fill="#FCFAFC"/>
<circle id="Ellipse 216" cx="1645.11" cy="430.142" r="1.5" transform="rotate(130.982 1645.11 430.142)" fill="#FCFAFC"/>
<circle id="Ellipse 217" cx="1346.11" cy="660.478" r="1.5" transform="rotate(130.982 1346.11 660.478)" fill="#FCFAFC"/>
<circle id="Ellipse 218" cx="829.482" cy="538.114" r="1.5" transform="rotate(-56.0617 829.482 538.114)" fill="#FCFAFC"/>
<circle id="Ellipse 219" cx="936.854" cy="593.495" r="1.5" transform="rotate(-56.0617 936.854 593.495)" fill="#FCFAFC"/>
<circle id="Ellipse 220" cx="993.478" cy="647.27" r="1.5" transform="rotate(-56.0617 993.478 647.27)" fill="#FCFAFC"/>
<circle id="Ellipse 221" cx="1661.36" cy="637.628" r="1.5" transform="rotate(130.982 1661.36 637.628)" fill="#FCFAFC"/>
<circle id="Ellipse 222" cx="1494.52" cy="623.827" r="1.5" transform="rotate(130.982 1494.52 623.827)" fill="#FCFAFC"/>
<circle id="Ellipse 223" cx="894.57" cy="590.954" r="1" transform="rotate(-56.0617 894.57 590.954)" fill="#FCFAFC"/>
<circle id="Ellipse 224" cx="1581.38" cy="619.144" r="1" transform="rotate(130.982 1581.38 619.144)" fill="#FCFAFC"/>
<circle id="Ellipse 225" cx="906.832" cy="705.276" r="1" transform="rotate(-56.0617 906.832 705.276)" fill="#FCFAFC"/>
<circle id="Ellipse 226" cx="1564.7" cy="533.126" r="1" transform="rotate(130.982 1564.7 533.126)" fill="#FCFAFC"/>
<circle id="Ellipse 227" cx="1773.59" cy="519.872" r="1" transform="rotate(130.982 1773.59 519.872)" fill="#FCFAFC"/>
<circle id="Ellipse 228" cx="973.52" cy="548.86" r="1" transform="rotate(-56.0617 973.52 548.86)" fill="#FCFAFC"/>
<circle id="Ellipse 229" cx="1510.13" cy="714.881" r="1" transform="rotate(130.982 1510.13 714.881)" fill="#FCFAFC"/>
<circle id="Ellipse 230" cx="1346.48" cy="595.237" r="1" transform="rotate(130.982 1346.48 595.237)" fill="#FCFAFC"/>
<circle id="Ellipse 231" cx="871.208" cy="599.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 232" cx="919.208" cy="482.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 233" cx="975.208" cy="441.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 234" cx="757.208" cy="474.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 235" cx="1191.21" cy="593.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 236" cx="1252.21" cy="641.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 237" cx="1074.21" cy="575.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 238" cx="778.208" cy="570.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 239" cx="811.208" cy="575.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 240" cx="937.208" cy="539.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 241" cx="689.208" cy="711.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 242" cx="639.208" cy="635.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 243" cx="696.208" cy="574.525" r="0.5" fill="#FCFAFC"/>
<circle id="Ellipse 245" cx="803.295" cy="544.806" r="1.5" transform="rotate(-49.0176 803.295 544.806)" fill="#FCFAFC"/>
<circle id="Ellipse 246" cx="1319.92" cy="667.171" r="1.5" transform="rotate(123.938 1319.92 667.171)" fill="#FCFAFC"/>
<circle id="Ellipse 247" cx="1212.55" cy="611.789" r="1.5" transform="rotate(123.938 1212.55 611.789)" fill="#FCFAFC"/>
<circle id="Ellipse 248" cx="1155.92" cy="558.014" r="1.5" transform="rotate(123.938 1155.92 558.014)" fill="#FCFAFC"/>
<circle id="Ellipse 250" cx="654.885" cy="581.457" r="1.5" transform="rotate(-49.0176 654.885 581.457)" fill="#FCFAFC"/>
<circle id="Ellipse 251" cx="1254.83" cy="614.33" r="1" transform="rotate(123.938 1254.83 614.33)" fill="#FCFAFC"/>
<circle id="Ellipse 253" cx="1242.57" cy="500.008" r="1" transform="rotate(123.938 1242.57 500.008)" fill="#FCFAFC"/>
<circle id="Ellipse 256" cx="1175.88" cy="656.424" r="1" transform="rotate(123.938 1175.88 656.424)" fill="#FCFAFC"/>
<circle id="Ellipse 257" cx="639.274" cy="490.403" r="1" transform="rotate(-49.0176 639.274 490.403)" fill="#FCFAFC"/>
<circle id="Ellipse 258" cx="802.916" cy="610.047" r="1" transform="rotate(-49.0176 802.916 610.047)" fill="#FCFAFC"/>
<g id="vectorAnimation">
<path className="vectorAnimation2" d="M1254 721L1254 314" stroke="url(#paint17_linear_397_2521)" stroke-width="2"/>
<path className="vectorAnimation1" d="M1627.4 693.837L1288.15 438.496" stroke="url(#paint18_linear_397_2521)" stroke-width="2"/>
<path className="vectorAnimation3" d="M502.966 693.558L1192.19 424.736" stroke="url(#paint19_linear_397_2521)" stroke-width="2"/>
<path className="vectorAnimation4" d="M2135 673L1470.65 464.777" stroke="url(#paint20_linear_397_2521)" stroke-width="2"/>
<path className="vectorAnimation5" d="M831.159 729.991L1206 445" stroke="url(#paint21_linear_397_2521)" stroke-width="2"/>
</g>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_397_2521" x="15.8291" y="349.542" width="2471.35" height="326.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_397_2521"/>
</filter>
<linearGradient id="paint0_linear_397_2521" x1="1276" y1="876" x2="1276" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#050305" stop-opacity="0"/>
<stop offset="0.214611" stop-color="white"/>
<stop offset="0.405908" stop-color="white"/>
<stop offset="0.770833" stop-color="white" stop-opacity="0.72"/>
<stop offset="1" stop-color="#050305" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint1_radial_397_2521" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1263.5 611) rotate(90) scale(227 1262.5)">
<stop stop-color="#22B9F4" stop-opacity="0.32"/>
<stop offset="1" stop-color="#0490D6"/>
</radialGradient>
<radialGradient id="paint2_radial_397_2521" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1264 611) rotate(90.2666) scale(139.059 771.028)">
<stop stop-color="#8F3FBC"/>
<stop offset="0.598958" stop-color="#27125E"/>
</radialGradient>
<radialGradient id="paint3_radial_397_2521" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1262.5 611) rotate(90.2664) scale(101.197 560.716)">
<stop stop-color="#C679D4"/>
<stop offset="0.598958" stop-color="#6A34A7"/>
</radialGradient>
<radialGradient id="paint4_radial_397_2521" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1262 610.5) rotate(90.2687) scale(68.4971 382.76)">
<stop stop-color="#C977DB"/>
<stop offset="0.598958" stop-color="#7D35B2"/>
</radialGradient>
<linearGradient id="paint5_linear_397_2521" x1="1263.71" y1="495.34" x2="1279.93" y2="812.17" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_397_2521" x1="1262.94" y1="437.34" x2="1271.25" y2="754.783" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_397_2521" x1="1309.5" y1="451.968" x2="1022.48" y2="552.58" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_397_2521" x1="1616.82" y1="423.097" x2="1219.56" y2="512.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<radialGradient id="paint9_radial_397_2521" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1093.06 423.726) rotate(90.5224) scale(493.37 1140.93)">
<stop stop-color="#3E1652" stop-opacity="0"/>
<stop offset="1" stop-color="#3E1652"/>
</radialGradient>
<linearGradient id="paint10_linear_397_2521" x1="907.182" y1="423.097" x2="1304.44" y2="512.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#3E1652" stop-opacity="0.32"/>
<stop offset="1" stop-color="#AB40D6" stop-opacity="0.64"/>
</linearGradient>
<linearGradient id="paint11_linear_397_2521" x1="1113.5" y1="454.968" x2="1400.52" y2="555.58" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_397_2521" x1="1153" y1="265.129" x2="1602.8" y2="419.902" gradientUnits="userSpaceOnUse">
<stop stop-color="#841AB0"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_397_2521" x1="990.5" y1="454.968" x2="1277.52" y2="555.58" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear_397_2521" x1="1546.5" y1="451.968" x2="1259.48" y2="552.58" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_397_2521" x1="1526" y1="541.525" x2="1370.49" y2="797.46" gradientUnits="userSpaceOnUse">
<stop stop-color="#0490D6" stop-opacity="0.64"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear_397_2521" x1="1250.79" y1="405.4" x2="1250.79" y2="675" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_397_2521" x1="1253.5" y1="609.809" x2="1253.42" y2="416.907" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_397_2521" x1="1475.35" y1="667.53" x2="1431.11" y2="413.593" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear_397_2521" x1="840.285" y1="663.505" x2="858.083" y2="401.996" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint20_linear_397_2521" x1="1775.95" y1="658.497" x2="1771.16" y2="471.207" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint21_linear_397_2521" x1="1037.96" y1="687.193" x2="1033.05" y2="456.806" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCFAFC" stop-opacity="0"/>
<stop offset="0.456354" stop-color="#FCFAFC"/>
<stop offset="1" stop-color="#FCFAFC" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>






    </>
   )
}