import React from 'react';
import { ButtonLink } from '../../uiComponents';
import constants from '../../constants';

interface IProps {
  href: string;
  title: string;
  subtitle?: string;
  description?: string;
  label?: string;
}

const FlatFileWidget: React.FC<IProps> = ({
  href,
  title,
  subtitle,
  description,
  label = 'Accéder au fichier',
}) => (
  <>
    <div className="flat-file-widget">
      <svg
        width="50"
        viewBox="0 0 157 193"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M106.5 24.5H24L20.5 29.5V164.5L24 169H132L136.5 164.5V56L106.5 24.5Z"
          fill="white"
        />
        <path d="M137.97 54.1355L137.881 53.8399L137.852 53.7216L137.704 53.426L137.644 53.3077L137.348 52.953L107.005 22.68L106.65 22.3843C106.62 22.3843 106.591 22.3843 106.561 22.3252L106.265 22.1774L106.117 22.1478L105.82 22.0591L105.346 22H25.993C22.1409 22 19 25.1337 19 28.977V164.023C19 167.866 22.1409 171 25.993 171H131.037C134.889 171 138 167.866 138 164.023V54.6085L137.97 54.1355ZM133.348 164.023C133.348 165.294 132.311 166.359 131.037 166.359H25.993C25.6831 166.359 25.3763 166.297 25.0903 166.178C24.8044 166.059 24.545 165.884 24.3272 165.664C24.1094 165.444 23.9376 165.183 23.8218 164.896C23.7059 164.61 23.6482 164.303 23.6521 163.993V29.0065C23.6521 27.7353 24.7189 26.671 26.0227 26.671H103.005V46.8333C103.005 52.4208 107.539 56.9145 113.139 56.9145H133.318V164.023H133.348Z" />
        <path d="M123.68 71H32.3197C31.7069 71.0076 31.1213 71.2514 30.688 71.6793C30.2546 72.1072 30.0077 72.6854 30 73.2905V142.68C30 143.943 31.0409 145 32.3197 145H123.68C124.959 145 126 143.943 126 142.68V73.2905C126 72.0278 124.959 71 123.68 71V71ZM41.6877 140.36H34.6691V133.43H41.7175V140.36H41.6877ZM41.6877 128.79H34.6691V121.86H41.7175V128.79H41.6877ZM41.6877 117.25H34.6691V110.29H41.7175V117.279L41.6877 117.25ZM41.6877 105.68H34.6691V98.75H41.7175V105.68H41.6877ZM41.6877 94.1103H34.6691V87.1802H41.7175V94.1103H41.6877ZM41.6877 82.5405H34.6691V75.6103H41.7175V82.5405H41.6877ZM72.1413 140.39H46.3866V133.43H72.1413V140.36V140.39ZM72.1413 128.79H46.3866V121.86H72.1413V128.79ZM72.1413 117.25H46.3866V110.29H72.1413V117.279V117.25ZM72.1413 105.68H46.3866V98.75H72.1413V105.68ZM72.1413 94.1103H46.3866V87.1802H72.1413V94.1103ZM72.1413 82.5698H46.3866V75.581H72.1413V82.5405V82.5698ZM96.7361 140.36H76.8104V133.43H96.7361V140.36ZM96.7361 128.79H76.8104V121.86H96.7361V128.79ZM96.7361 117.25H76.8104V110.29H96.7361V117.279V117.25ZM96.7361 105.68H76.8104V98.75H96.7361V105.68ZM96.7361 94.1103H76.8104V87.1802H96.7361V94.1103ZM96.7361 82.5698H76.8104V75.581H96.7361V82.5405V82.5698ZM121.331 140.36H101.405V133.43H121.331V140.36V140.36ZM121.331 128.79H101.405V121.86H121.331V128.79ZM121.331 117.25H101.405V110.29H121.331V117.279V117.25ZM121.331 105.68H101.405V98.75H121.331V105.68ZM121.331 94.1103H101.405V87.1802H121.331V94.1103ZM121.331 82.5698H101.405V75.581H121.331V82.5405V82.5698Z" />
      </svg>
      <div className="flat-file-title">{title}</div>
      <div className="flat-file-icon"></div>
      {description && <div className="description">{description}</div>}
      <ButtonLink href={href} alt target="_blank" rel="noopener noreferrer">
        {label}
      </ButtonLink>
    </div>
    <style jsx>{`
      div.flat-file-widget {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        border-radius: 10px;
        padding: 30px 20px;
        margin: auto;
        width: calc(100% - 40px);
        background-color: ${constants.colors.lightGrey};
        position: relative;
        height: calc(100% - 60px);
      }
      div.flat-file-title {
        text-align: center;
        font-weight: bold;
      }
      div.description {
        text-align: center;
        font-size: 0.9rem;
        font-style: italic;
        margin-bottom: 10px;
      }
      svg {
        fill: ${constants.colors.darkBlue};
      }
    `}</style>
  </>
);

export default FlatFileWidget;
