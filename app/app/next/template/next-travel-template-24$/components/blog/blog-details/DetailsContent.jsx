import Social2 from "../../common/social/Social2";
import blogsData from "../../../data/blogs";
import Link from "next/link";

const DetailsContent = () => {
  return (
    <>
      <h3 className="text-20 fw-500">What makes a good brand book?</h3>
      <div className="text-15 mt-20">
        Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
        phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus
        gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis enim
        ut tellus elementum sagittis vitae et leo. Semper risus in hendrerit
        gravida rutrum quisque non. At urna condimentum mattis pellentesque id
        nibh tortor. A erat nam at lectus urna duis convallis convallis tellus.
        Sit amet mauris commodo quis imperdiet massa. Vitae congue eu consequat
        ac felis.
      </div>

      <ul className="list-disc text-15 mt-30">
        <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
        <li>
          At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur
        </li>
        <li>Magna etiam tempor orci eu lobortis elementum.</li>
        <li>
          Bibendum est ultricies integer quis. Semper eget duis at tellus.
        </li>
      </ul>

      <div className="quote mt-30 mb-30">
        <div className="quote__line bg-blue-1" />
        <div className="quote__icon">
          <img src="/img/misc/quote-light.svg" alt="icon" />
        </div>
        <div className="text-18 fw-500">
          “Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
          phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus
          gravida quis blandit. Arcu cursus vitae congue mauris.“
        </div>
      </div>

      <div className="text-15 mt-20">
        Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
        tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
        lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
        rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
        pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
        lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis
        eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus
        euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non,
        proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna
        faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed
        facilisis velit.
        <br />
        <br />
        Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus
        dictum sit euismod cum id. Dictum integer ultricies arcu fermentum
        fermentum sem consectetur. Consectetur eleifend aenean eu neque euismod
        amet parturient turpis vitae. Faucibus ipsum felis et duis fames.
      </div>

      <div className="row y-gap-30 pt-30">
        <div className="col-md-6">
          <img src="/img/blog/single/2.png" alt="image" className="rounded-4" />
          <div className="text-15 mt-10">
            Donec purus posuere nullam lacus aliquam.
          </div>
        </div>
        <div className="col-md-6">
          <img src="/img/blog/single/3.png" alt="image" className="rounded-4" />
          <div className="text-15 mt-10">
            Donec purus posuere nullam lacus aliquam.
          </div>
        </div>
      </div>

      <div className="text-15 mt-20">
        Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
        tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
        lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
        rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
        pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
        lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis
        eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus
        euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non,
        proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna
        faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed
        facilisis velit.
        <br />
        <br />
        Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus
        dictum sit euismod cum id. Dictum integer ultricies arcu fermentum
        fermentum sem consectetur. Consectetur eleifend aenean eu neque euismod
        amet parturient turpis vitae. Faucibus ipsum felis et duis fames.
      </div>

      <div className="row y-gap-20 justify-between pt-30">
        <div className="col-auto">
          <div className="d-flex items-center">
            <div className="fw-500 mr-10">Share</div>
            <div className="d-flex items-center">
              <Social2 />
            </div>
          </div>
        </div>
        {/* End social share */}

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10">
            {blogsData.slice(0, 3).map((item) => (
              <div key={item.id} className="col-auto">
                <Link
                  href={`/blog/blog-details/${item.id}`}
                  className="button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize"
                >
                  {item.tag}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* End tags */}
      </div>
    </>
  );
};

export default DetailsContent;
