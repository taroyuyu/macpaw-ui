import * as React from 'react';

function SvgPaymentMaestro(props) {
  return (
    <svg width={70} height={54} viewBox="0 0 70 54" {...props}>
      <defs>
        <linearGradient
          x1="-3.856%"
          y1="20.245%"
          x2="117.899%"
          y2="87.183%"
          id="payment_maestro_svg__a"
        >
          <stop stopColor="#606060" offset="0%" />
          <stop stopColor="#353141" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-3.856%"
          y1="20.245%"
          x2="117.899%"
          y2="87.183%"
          id="payment_maestro_svg__c"
        >
          <stop stopColor="#EBECED" offset="0%" />
          <stop stopColor="#D6D7E0" offset="100%" />
        </linearGradient>
        <rect
          id="payment_maestro_svg__b"
          x={9}
          y={17}
          width={70}
          height={54}
          rx={8}
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-9 -17)">
          <use
            fill="url(#payment_maestro_svg__a)"
            xlinkHref="#payment_maestro_svg__b"
          />
          <use
            fill="url(#payment_maestro_svg__c)"
            xlinkHref="#payment_maestro_svg__b"
          />
        </g>
        <g fillRule="nonzero">
          <path fill="#6C6BBD" d="M30.198 15.418h9.743V32.93h-9.743z" />
          <path
            d="M30.81 24.174c0-3.553 1.658-6.712 4.255-8.756a11.09 11.09 0 00-6.88-2.379c-6.15 0-11.136 4.986-11.136 11.135 0 6.15 4.985 11.135 11.135 11.135a11.09 11.09 0 006.88-2.379c-2.586-2.043-4.254-5.202-4.254-8.756"
            fill="#D32011"
          />
          <path
            d="M53.08 24.174c0 6.15-4.985 11.135-11.135 11.135a11.09 11.09 0 01-6.88-2.379c2.586-2.043 4.254-5.202 4.254-8.756 0-3.553-1.658-6.712-4.254-8.756a11.09 11.09 0 016.88-2.379c6.15 0 11.135 4.986 11.135 11.135"
            fill="#0099DF"
          />
          <path
            d="M43.228 37.876c.128 0 .316.03.454.079l-.197.602a1.017 1.017 0 00-.405-.08c-.424 0-.632.277-.632.761v1.658h-.641v-2.951h.641v.355a.88.88 0 01.78-.424zm-2.369.661h-1.056v1.333c0 .296.108.493.424.493.168 0 .375-.059.573-.168l.187.553a1.544 1.544 0 01-.8.227c-.76 0-1.026-.404-1.026-1.095v-1.353h-.602v-.592h.602v-.898h.652v.898h1.046v.602zm-8.233.632c.07-.425.326-.72.79-.72.415 0 .681.256.75.72h-1.54zm2.202.257c-.01-.919-.573-1.55-1.402-1.55-.869 0-1.47.631-1.47 1.55 0 .937.63 1.55 1.52 1.55.443 0 .848-.11 1.213-.415l-.315-.474a1.406 1.406 0 01-.86.306c-.414 0-.789-.188-.888-.72h2.192c0-.08.01-.159.01-.247zm2.823-.721a1.92 1.92 0 00-.918-.257c-.356 0-.563.129-.563.346 0 .197.227.256.504.286l.306.04c.641.088 1.036.365 1.036.888 0 .563-.494.967-1.352.967-.484 0-.928-.128-1.284-.385l.306-.503c.218.168.543.306.988.306.434 0 .67-.128.67-.355 0-.168-.167-.257-.522-.306l-.306-.04c-.662-.089-1.017-.395-1.017-.869 0-.592.484-.947 1.234-.947.474 0 .898.108 1.204.306l-.286.523zm7.936-.217a.892.892 0 00-.365.069.972.972 0 00-.296.197 1.036 1.036 0 00-.197.296.989.989 0 00-.07.385c0 .139.02.267.07.385a.774.774 0 00.197.297.915.915 0 00.661.266c.129 0 .257-.02.366-.07a.781.781 0 00.296-.196.866.866 0 00.197-.297.989.989 0 00.07-.385.989.989 0 00-.07-.385.781.781 0 00-.197-.296.915.915 0 00-.662-.266zm0-.612c.227 0 .445.04.642.118a1.497 1.497 0 01.839.82c.079.187.118.394.118.621 0 .227-.039.435-.118.622a1.415 1.415 0 01-.336.494 1.58 1.58 0 01-.503.326 1.688 1.688 0 01-.642.118c-.227 0-.444-.04-.641-.118a1.478 1.478 0 01-.504-.326 1.562 1.562 0 01-.335-.494 1.587 1.587 0 01-.119-.622c0-.227.04-.434.119-.621a1.41 1.41 0 01.335-.494c.138-.138.306-.247.504-.326.197-.079.404-.118.641-.118zm-16.722 1.55c0-.524.336-.948.899-.948.533 0 .888.405.888.948 0 .542-.355.947-.888.947-.563 0-.899-.424-.899-.947zm2.39 0v-1.481h-.642v.355c-.208-.266-.514-.434-.938-.434-.83 0-1.48.651-1.48 1.55 0 .898.65 1.55 1.48 1.55.424 0 .73-.168.938-.435v.355h.641v-1.46zm-3.624 1.48V39.05c0-.7-.444-1.164-1.164-1.174-.376-.01-.77.108-1.037.523-.207-.326-.523-.523-.977-.523-.316 0-.622.089-.869.434v-.365h-.641v2.951h.651v-1.638c0-.514.286-.79.72-.79.425 0 .642.276.642.78v1.648h.652v-1.638c0-.514.296-.79.72-.79.445 0 .652.276.652.78v1.648h.651v.01z"
            fill="#110F0D"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPaymentMaestro;
