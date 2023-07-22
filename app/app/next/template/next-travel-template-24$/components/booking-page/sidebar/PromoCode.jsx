const PromoCode = () => {
  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="text-20 fw-500 mb-15">Do you have a promo code?</div>
      <div className="form-input ">
        <input type="text" required />
        <label className="lh-1 text-16 text-light-1">Enter promo code</label>
      </div>
      <button className="button -outline-blue-1 text-blue-1 px-30 py-15 mt-20">
        Apply
      </button>
    </div>
  );
};

export default PromoCode;
