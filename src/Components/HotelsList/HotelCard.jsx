import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  height: 170px;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 0.5rem;
  display: flex;
  background: white;
  padding-right: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  .card-image {
    height: 100%;
    width: 30%;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .hotel-detail {
    width: 50%;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hotel-name,
  .hotel-city {
    margin: 0.1rem 0;
  }

  .hotel-name-add {
    margin-top: 5px;
  }

  .hotel-city {
    color: #505c66;
    padding-bottom: 0.5rem;
  }

  .description {
    color: #209c6b;
    margin-bottom: 0.3rem;
  }

  .desc-rating {
    margin-bottom: 0.5rem;
  }

  .rating {
    font-size: 0.875rem;
    color: #505c66;

    color: #8f8f8f;
  }

  .star {
    color: #1d1c1c;
    font-weight: 700;
  }

  .price-detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
    text-align: right;
  }

  .off {
    border-radius: 1.5rem;
    padding: 0.5rem;
    background: #1f7d57;
    color: white;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .total-price {
    font-weight: 700;
  }
`;

export const Hotelcard = ({ data, handleOpenHotel }) => {
    return (
        <Wrapper
            onClick={() => {
                handleOpenHotel(data.hotelId);
            }}
        >
            <img className="card-image" src={data.images[1].url} alt="" />
            <div className="hotel-detail">
                <div className="hotel-name-add">
                    <h3 className="hotel-name">{data.name}</h3>
                    <div className="hotel-city">{data.address.city}</div>
                </div>
                <div className="desc-rating">
                    <div className="description">Fully refundable</div>
                    <div className="description">Reserve Now Pay Later</div>
                    <div className="rating">
                        <span className="star">{data.starRating}/5.0</span> Excellent (356
                        reviews)
                    </div>
                </div>
            </div>
            <div className="price-detail">
                <div className="off">We have 5 left at 25% off</div>
                <div className="price">${data.price}</div>
                <div>Per night</div>
                <div className="total-price">${data.price + 20} Total</div>
                <div>Includes taxes and fees</div>
            </div>
        </Wrapper>
    );
};
