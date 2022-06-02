import React from 'react'

export default function DownloadIcon(props) {
  return (
      <div {...props}>
          <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_812_5)">
                  <circle cx="94.5" cy="88.5" r="75.5" fill="#AE43A1" />
              </g>
              <path d="M91.5251 110.475C92.892 111.842 95.108 111.842 96.4749 110.475L118.749 88.201C120.116 86.8342 120.116 84.6181 118.749 83.2513C117.382 81.8844 115.166 81.8844 113.799 83.2513L94 103.05L74.201 83.2513C72.8342 81.8844 70.6181 81.8844 69.2513 83.2513C67.8844 84.6181 67.8844 86.8342 69.2513 88.201L91.5251 110.475ZM90.5 56V108H97.5V56H90.5Z" fill="#FAFAFA" />
              <line x1="68" y1="122.5" x2="121" y2="122.5" stroke="white" stroke-width="7" />
              <defs>
                  <filter id="filter0_d_812_5" x="0" y="0" width="193" height="193" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_812_5" />
                      <feOffset dx="2" dy="8" />
                      <feGaussianBlur stdDeviation="9.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_812_5" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_812_5" result="shape" />
                  </filter>
              </defs>
          </svg>
      </div>
  )
}
