const ImportantInfo = () => {
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">
      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Inclusions</div>
        <ul className="list-disc">
          <li>Superior Coach, Wi-Fi and USB Charging On-board</li>
          <li>Expert guide</li>
          <li>Admission to Windsor Castle (if option selected)</li>
          <li>Admission to Stonehenge</li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Departure details</div>
        <div className="text-15">
          Departures from 01st April 2022: Tour departs at 8 am (boarding at
          7.30 am), Victoria Coach Station Gate 1-5
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="fw-500 mb-10">Know before you go</div>
        <ul className="list-disc">
          <li>Duration: 11h</li>
          <li>Mobile tickets accepted</li>
          <li>Instant confirmation</li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Exclusions</div>
        <ul className="list-disc">
          <li>Hotel pick-up and drop-off</li>
          <li>Gratuities</li>
          <li>Lunch</li>
        </ul>
      </div>

      <div className="col-12">
        <div className="fw-500 mb-10">Additional information</div>
        <ul className="list-disc">
          <li>Confirmation will be received at time of booking</li>
          <li>
            Departs at 8am (boarding at 7.30am), Victoria Coach Station Gate
            1-5, 164 Buckingham Palace Road, London, SW1W 9TP
          </li>
          <li>
            As Windsor Castle is a working royal palace, sometimes the entire
            Castle or the State Apartments within the Castle need to be closed
            at short notice. (if selected this option)
          </li>
          <li>
            Stonehenge is closed on 21 June due to the Summer Solstice. During
            this time, we will instead visit the Avebury Stone Circle.
          </li>
          <li>Please note: the tour itinerary and order may change</li>
        </ul>
      </div>
    </div>
  );
};

export default ImportantInfo;
