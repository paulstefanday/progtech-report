import React from 'react'
import Theme from './theme'


export default () => (
    <style>{`

a, a:visited, a:link {
  color: black;
}

    body {
        margin: 0;
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }

      input, textarea {
        margin-bottom: 10px;
      }
      
      .gradient {
        background: radial-gradient(
            farthest-side at bottom left,
            rgba(255, 82, 206, 0.5),
            transparent 300px
          ),
          radial-gradient(
            farthest-corner at bottom right,
            rgba(184, 0, 245, 0.6),
            transparent 300px
          ),
          radial-gradient(
            farthest-corner at bottom center,
            rgba(255, 50, 50, 0.5),
            transparent 200px
          );
      }

      
      .gradient-white {
        /* background: radial-gradient(
          farthest-side at bottom left,
          rgba(255, 255, 255, 0.5),
          transparent 600px
        ); */
      }
      
      .dropdown {
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        min-width: 160px;
        /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
        padding: 0;
        z-index: 1;
        top: 28px;
        left: 0px;
        background-color: #ffd07e;
        text-align: left;
        width: 200px;
      }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }
      
      .arrows {
        width: 48px;
        height: 48px;
        border-color: #000;
        position: absolute;
        top: 50%;
        margin-top: -31px;
        cursor: pointer;
      }
      
      .prev {
        border-bottom: 1px solid;
        border-left: 1px solid;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        left: 50px;
      }
      
      .next {
        border-bottom: 1px solid;
        border-left: 1px solid;
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
        right: 50px;
      }
      
      .slider-box {
        transition: opacity 300ms linear;
        opacity: 0;
        position: absolute;
        width: 100%;
        left: 0;
      }
      
      .active {
        opacity: 1;
      }
      
    `}
    </style>
)
