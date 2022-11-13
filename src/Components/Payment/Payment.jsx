import { FinalSubmit } from "./FinalSubmit";
import { PaymentForm } from "./PaymentForm";
import { PriceDetail } from "./PriceDetail";
import styled from "styled-components";
import { useSelector } from 'react-redux'
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

export const Payment = () => {

    const { paymentAmount } = useSelector(state => state)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Wrapper>
            <div>
                <PaymentForm />
                <FinalSubmit />
            </div>

            <PriceDetail price={paymentAmount} />
        </Wrapper>
    );
};
