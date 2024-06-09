import styled, { keyframes } from "styled-components";
import { blue, typeScale } from "../../utils";

const fadeIn = keyframes`
 0% { 
    transform: translateX(0);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Cube = styled.div`

  position: relative;
  transform-style: preserve-3d;
  width: 500px;
  height: 400px;
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  margin: 0 20px;
  transition: all 0.2s cubic-bezier(0.4, 0.55, 0.2, 1.03);
  
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 720px) {
    width: 270px;
    height: 340px;
  }

  &.fadeIn {
    animation: ${fadeIn} 500ms ease forwards;
    animation-delay: ${(props) => props.index * 0.05}s;
  }
`;

export const Face = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  .img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    transition: all 0.2s ease;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
  }

  .content {
    transition: all 0.2s ease;
    opacity: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    background-color: rgba(10, 0, 0, 0.75);
    border-radius: 0.5rem;
    
    .text-h {
      font-size: ${typeScale.header3};
    }
    
    .text-p {
      font-size: ${typeScale.paragraph};
    }
    
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &:hover {
    .content {
      opacity: 1;
      transform: scale(1);
    }
    .img {
      filter: brightness(50%);
    }
  }

  @media screen and (max-width: 720px) {
    .img {
      background-size: auto 160px;
    }
    .content {
      .text-h {
        font-size: ${typeScale.header4};
      }
      .text-p {
        font-size: ${typeScale.helperText};
        line-height: 1.2rem;
      }
      .buttons {
        justify-content: space-around;
        button {
          transform: scale(0.8);
        }
      }
    }
  }
`;
