import React, { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { themeBreakPoints } from '../../util/theme';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const LogoLink = styled<any>(Link)`
    align-items: center;
    display: flex;
    height: 33px;
    font-family: 'Inter var', sans-serif;
    text-decoration: none;
`;

const LogoText = styled.h1`
    color: #000;
    display: none;
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
    text-decoration: none;

    @media (min-width: ${themeBreakPoints.xxl}) {
        display: block;
    }
`;

const LogoSVG = () => (
    <svg width="33" height="33" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.4241 33.9669L16.3703 34.7651L16.3742 34.7654L16.4241 33.9669ZM26.3474 31.4068L26.7777 32.0812L26.7804 32.0795L26.3474 31.4068ZM27.2587 24.2333L27.8931 23.7459L27.8881 23.7395L27.2587 24.2333ZM1.03301 16.4515L0.234839 16.3974L0.234569 16.4017L1.03301 16.4515ZM3.58976 26.3879L2.91656 26.8201L2.91656 26.8201L3.58976 26.3879ZM10.7537 27.3004L11.2419 27.9343L11.2484 27.9292L10.7537 27.3004ZM18.5759 1.03999L18.5204 1.83806L18.5221 1.83818L18.5759 1.03999ZM8.62732 3.60013L9.06033 4.27281L9.06183 4.27184L8.62732 3.60013ZM7.716 10.7736L7.08156 11.261L7.08663 11.2674L7.716 10.7736ZM33.967 18.5554L34.7651 18.6101L34.7654 18.6052L33.967 18.5554ZM31.4102 8.61902L32.0852 8.18953L32.0834 8.18682L31.4102 8.61902ZM24.2463 7.70649L23.7581 7.07267L23.7516 7.07775L24.2463 7.70649ZM24.77 15.5611L25.3464 16.1158L24.77 15.5611ZM24.7311 16.209L25.3697 15.7271L24.7311 16.209ZM28.3883 5.0964L27.8585 5.69578L28.3883 5.0964ZM27.7782 5.06893L27.3105 4.41988L27.7782 5.06893ZM32.2008 24.956L32.9141 25.3182L32.2008 24.956ZM31.3814 25.0192L32.0199 24.5372L31.3814 25.0192ZM12.7234 8.05935L12.362 7.34564L12.7234 8.05935ZM13.2792 8.14735L12.7242 8.72354L13.2792 8.14735ZM8.11688 11.2845L7.4875 11.7783L8.11688 11.2845ZM5.10864 6.62687L4.50852 6.09786L5.10864 6.62687ZM5.08124 7.236L5.73088 6.76913L5.08124 7.236ZM10.3748 19.4473L9.80365 18.8871L10.3748 19.4473ZM10.4155 18.7942L11.0519 18.3094L10.4155 18.7942ZM11.2652 26.898L11.7599 27.5268L11.2652 26.898ZM27.1181 13.1211L26.5417 12.5663L27.1181 13.1211ZM3.64241 9.90413L4.27876 9.41931L3.64241 9.90413ZM19.439 24.6332L19.9973 24.0602L19.439 24.6332ZM18.7904 24.5909L18.3111 23.9505L18.7904 24.5909ZM23.7387 8.1058L23.2441 7.47707L23.7387 8.1058ZM23.7672 8.9411L23.2946 9.58661L23.7672 8.9411ZM22.2795 26.9442L21.9144 26.2323L22.2795 26.9442ZM21.7193 26.8553L22.2776 26.2823L21.7193 26.8553ZM8.04674 22.2898L7.33453 22.6542L8.04674 22.2898ZM8.13697 21.7288L8.7081 22.289L8.13697 21.7288ZM29.8661 28.3801L29.2659 27.851L29.8661 28.3801ZM29.8934 27.7709L30.5431 27.3041L29.8934 27.7709ZM25.1626 3.69434L24.6972 3.04364L25.1626 3.69434ZM26.8627 23.7287L26.2334 24.2226L26.8627 23.7287ZM26.0245 23.7582L25.3781 23.2869L26.0245 23.7582ZM6.61168 29.9105L7.14152 29.3111L6.61168 29.9105ZM7.22179 29.938L7.68949 30.587L7.22179 29.938ZM15.3905 10.1809L15.9455 9.60474L15.3905 10.1809ZM16.0283 10.2275L15.5629 9.57681L16.0283 10.2275ZM9.86914 32.1267L10.2402 31.418L9.86914 32.1267ZM9.81317 31.3099L10.2925 31.9504L9.81317 31.3099ZM9.49807 32.8354C11.5635 33.9168 13.8931 34.5982 16.3703 34.7651L16.4779 33.1688C14.2259 33.017 12.1121 32.398 10.2402 31.418L9.49807 32.8354ZM16.3742 34.7654C20.1947 35.0045 23.7795 33.9941 26.7777 32.0812L25.9171 30.7324C23.1942 32.4696 19.9441 33.3857 16.4741 33.1685L16.3742 34.7654ZM26.7804 32.0795C28.1518 31.1967 29.3875 30.1327 30.4662 28.9091L29.2659 27.851C28.2844 28.9645 27.161 29.9316 25.9144 30.7341L26.7804 32.0795ZM30.5431 27.3041C29.7145 26.1511 28.8246 24.9585 27.8931 23.746L26.6243 24.7207C27.5471 25.922 28.4267 27.1008 29.2438 28.2378L30.5431 27.3041ZM27.8881 23.7395C27.7561 23.5713 27.6241 23.4031 27.4921 23.2349L26.2334 24.2226C26.3653 24.3908 26.4973 24.559 26.6293 24.7272L27.8881 23.7395ZM25.3781 23.2869C24.4818 24.5161 23.2837 25.53 21.9144 26.2323L22.6446 27.656C24.23 26.8428 25.6231 25.6666 26.6709 24.2295L25.3781 23.2869ZM22.2776 26.2823L19.9973 24.0602L18.8807 25.2061L21.1609 27.4282L22.2776 26.2823ZM18.3111 23.9505L9.33381 30.6694L10.2925 31.9504L19.2698 25.2314L18.3111 23.9505ZM2.11334 9.60259C1.05932 11.659 0.40135 13.9442 0.234851 16.3974L1.83118 16.5057C1.98272 14.2729 2.58057 12.1988 3.5372 10.3324L2.11334 9.60259ZM0.234569 16.4017C-0.00406718 20.2249 1.00372 23.8406 2.91656 26.8201L4.26297 25.9557C2.53055 23.2573 1.61444 19.9783 1.83146 16.5014L0.234569 16.4017ZM2.91656 26.8201C3.79794 28.193 4.86021 29.43 6.08183 30.5099L7.14152 29.3111C6.02989 28.3285 5.06426 27.2038 4.26297 25.9557L2.91656 26.8201ZM7.68949 30.587C8.84061 29.7576 10.0313 28.8667 11.2419 27.9342L10.2656 26.6667C9.06617 27.5905 7.88927 28.471 6.7541 29.2889L7.68949 30.587ZM11.2484 27.9292C11.4189 27.795 11.5894 27.6609 11.7599 27.5268L10.7705 26.2693C10.6001 26.4034 10.4296 26.5376 10.2591 26.6717L11.2484 27.9292ZM11.7159 25.4223C10.4796 24.5059 9.46229 23.3003 8.75896 21.9254L7.33453 22.6542C8.14888 24.246 9.32668 25.6429 10.7631 26.7077L11.7159 25.4223ZM8.7081 22.289L10.9459 20.0075L9.80365 18.8871L7.56584 21.1687L8.7081 22.289ZM11.0519 18.3094L4.27876 9.41931L3.00606 10.389L9.77919 19.279L11.0519 18.3094ZM25.4852 2.16274C23.4239 1.08642 21.1002 0.408308 18.6297 0.241797L18.5221 1.83818C20.768 1.98954 22.8765 2.60557 24.7446 3.58103L25.4852 2.16274ZM18.6314 0.241914C14.8079 -0.0239544 11.194 0.987001 8.19281 2.92841L9.06183 4.27184C11.7817 2.51246 15.0533 1.59697 18.5204 1.83806L18.6314 0.241914ZM8.19431 2.92745C6.82284 3.81027 5.58714 4.87427 4.50852 6.09786L5.70875 7.15589C6.69031 6.04242 7.81369 5.07529 9.06033 4.27281L8.19431 2.92745ZM4.4316 7.70287C5.26018 8.85582 6.15009 10.0484 7.08159 11.261L8.35041 10.2862C7.42755 9.08491 6.54799 7.90612 5.73088 6.76913L4.4316 7.70287ZM7.08663 11.2674C7.22025 11.4377 7.35388 11.608 7.4875 11.7783L8.74625 10.7906C8.61262 10.6203 8.479 10.45 8.34538 10.2797L7.08663 11.2674ZM9.59426 11.7328C10.508 10.4923 11.6982 9.47522 13.0848 8.77305L12.362 7.34564C10.7483 8.1628 9.36564 9.34532 8.30602 10.7839L9.59426 11.7328ZM12.7242 8.72354L14.8355 10.7571L15.9455 9.60474L13.8342 7.57115L12.7242 8.72354ZM16.4937 10.8782L25.628 4.34503L24.6972 3.04364L15.5629 9.57681L16.4937 10.8782ZM32.9141 25.3182C33.9436 23.2911 34.5989 21.0352 34.7651 18.6101L33.1689 18.5007C33.0179 20.7039 32.4231 22.7514 31.4875 24.5937L32.9141 25.3182ZM34.7654 18.6052C35.0042 14.7804 33.9953 11.1914 32.0852 8.18953L30.7353 9.0485C32.4704 11.7752 33.3855 15.0302 33.1685 18.5056L34.7654 18.6052ZM32.0834 8.18682C31.2021 6.81396 30.1398 5.57691 28.9182 4.49701L27.8585 5.69578C28.9701 6.67845 29.9357 7.80311 30.737 9.05122L32.0834 8.18682ZM27.3105 4.41988C26.1594 5.24937 24.9687 6.14023 23.7581 7.0727L24.7345 8.34028C25.9338 7.41645 27.1107 6.53597 28.2459 5.71798L27.3105 4.41988ZM23.7516 7.07775C23.5824 7.21086 23.4133 7.34396 23.2441 7.47707L24.2334 8.73454C24.4026 8.60144 24.5718 8.46833 24.7409 8.33523L23.7516 7.07775ZM23.2946 9.58661C24.6325 10.566 25.7036 11.8761 26.4085 13.3708L27.8557 12.6883C27.0388 10.9561 25.7967 9.43541 24.2398 8.2956L23.2946 9.58661ZM26.5417 12.5663L24.1935 15.0064L25.3464 16.1158L27.6946 13.6758L26.5417 12.5663ZM24.0926 16.691L30.7429 25.5012L32.0199 24.5372L25.3697 15.7271L24.0926 16.691ZM24.1935 15.0064C23.7504 15.4668 23.7076 16.181 24.0926 16.691L25.3697 15.7271C25.4585 15.8448 25.4486 16.0096 25.3464 16.1158L24.1935 15.0064ZM28.9182 4.49701C28.4599 4.09189 27.7919 4.07302 27.3105 4.41988L28.2459 5.71798C28.1357 5.79741 27.974 5.79793 27.8585 5.69578L28.9182 4.49701ZM31.4875 24.5937C31.6057 24.361 31.8984 24.3762 32.0199 24.5372L30.7429 25.5012C31.2982 26.2368 32.4699 26.1928 32.9141 25.3182L31.4875 24.5937ZM13.0848 8.77305C12.9523 8.84015 12.8094 8.80564 12.7242 8.72354L13.8342 7.57115C13.4511 7.20216 12.8634 7.09171 12.362 7.34564L13.0848 8.77305ZM7.4875 11.7783C8.0497 12.4948 9.09911 12.405 9.59426 11.7328L8.30602 10.7839C8.35621 10.7157 8.43284 10.6801 8.50725 10.6774C8.58483 10.6745 8.68132 10.7079 8.74625 10.7906L7.4875 11.7783ZM4.50852 6.09786C4.10489 6.55573 4.08606 7.22207 4.4316 7.70287L5.73088 6.76913C5.81001 6.87924 5.81051 7.04047 5.70875 7.15589L4.50852 6.09786ZM10.9459 20.0075C11.3982 19.5464 11.4433 18.8232 11.0519 18.3094L9.77919 19.279C9.68886 19.1605 9.69927 18.9936 9.80365 18.8871L10.9459 20.0075ZM11.7599 27.5268C12.4747 26.9643 12.3843 25.9178 11.7159 25.4223L10.7631 26.7077C10.6956 26.6576 10.6604 26.5816 10.6577 26.5077C10.6549 26.4305 10.688 26.3343 10.7705 26.2693L11.7599 27.5268ZM26.4164 13.387C26.2803 13.1145 26.3305 12.7858 26.5417 12.5663L27.6946 13.6758C27.9529 13.4074 28.0143 13.0054 27.8478 12.6721L26.4164 13.387ZM3.5372 10.3324C3.41868 10.5636 3.12771 10.5486 3.00606 10.389L4.27876 9.41931C3.723 8.68984 2.55859 8.7339 2.11334 9.60259L3.5372 10.3324ZM19.9973 24.0602C19.5389 23.6135 18.8235 23.5669 18.3111 23.9505L19.2698 25.2314C19.1516 25.3199 18.9865 25.3092 18.8807 25.2061L19.9973 24.0602ZM23.2441 7.47707C22.5261 8.04196 22.621 9.09345 23.2946 9.58661L24.2398 8.2956C24.3077 8.34536 24.3433 8.42142 24.3462 8.49531C24.3493 8.57249 24.3164 8.66927 24.2334 8.73454L23.2441 7.47707ZM21.9144 26.2323C22.0476 26.164 22.192 26.1989 22.2776 26.2823L21.1609 27.4282C21.5456 27.8031 22.1398 27.9149 22.6446 27.656L21.9144 26.2323ZM8.75896 21.9254C8.82726 22.059 8.79197 22.2035 8.7081 22.289L7.56584 21.1687C7.18896 21.5529 7.07565 22.1481 7.33453 22.6542L8.75896 21.9254ZM30.4662 28.9091C30.8698 28.4512 30.8886 27.7849 30.5431 27.3041L29.2438 28.2378C29.1647 28.1277 29.1642 27.9665 29.2659 27.851L30.4662 28.9091ZM24.7446 3.58103C24.5093 3.45815 24.5327 3.16126 24.6972 3.04364L25.628 4.34503C26.3821 3.80566 26.3632 2.62118 25.4852 2.16274L24.7446 3.58103ZM27.4921 23.2349C26.9256 22.5129 25.8703 22.6118 25.3781 23.2869L26.6709 24.2295C26.6215 24.2973 26.546 24.3326 26.4727 24.3356C26.396 24.3388 26.2989 24.3061 26.2334 24.2226L27.4921 23.2349ZM6.08183 30.5099C6.54012 30.915 7.20812 30.9339 7.68949 30.587L6.7541 29.2889C6.86433 29.2095 7.02597 29.209 7.14152 29.3111L6.08183 30.5099ZM14.8355 10.7571C15.2868 11.1918 15.984 11.2427 16.4937 10.8782L15.5629 9.57681C15.6805 9.49269 15.8414 9.50443 15.9455 9.60474L14.8355 10.7571ZM10.2402 31.418C10.4714 31.539 10.4527 31.8305 10.2925 31.9504L9.33381 30.6694C8.60064 31.2182 8.63281 32.3824 9.49807 32.8354L10.2402 31.418Z"
            fill="#0029FF"
        />
    </svg>
);

export const Logo: React.FC<Props> = props => {
    const { ...restProps } = props;

    return (
        <LogoLink to="/" {...restProps}>
            <LogoSVG />
            <LogoText>Launch Kit</LogoText>
        </LogoLink>
    );
};
