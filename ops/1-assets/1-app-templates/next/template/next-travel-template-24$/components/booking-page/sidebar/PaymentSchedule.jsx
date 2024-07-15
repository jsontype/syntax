const PaymentSchedule = () => {
  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="text-20 fw-500 mb-20">Your payment schedule</div>
      <div className="row y-gap-5 justify-between">
        <div className="col-auto">
          <div className="text-15">Before you stay you&apos;ll pay</div>
        </div>
        {/* End col */}
        <div className="col-auto">
          <div className="text-15">US$4,047</div>
        </div>
        {/* End col */}
      </div>
      {/* End row */}
    </div>
  );
};

export default PaymentSchedule;
