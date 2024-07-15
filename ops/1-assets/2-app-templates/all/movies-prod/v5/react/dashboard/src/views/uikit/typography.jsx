import React, { Fragment } from "react";

//react-bootstrap
import { Row, Col } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import Card from "../../components/bootstrap/card";

const Typographys = () => {
  return (
    <Fragment>
      <Row>
           <div className="col-sm-12 col-lg-6">
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Display headings</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style. Keep in mind these headings are not responsive by default, but it’s possible to enable <Link href="https://getbootstrap.com/" target="_blank">responsive font sizes</Link>.</p>
                     <h1 className="display-1">Display</h1>
                     <h1 className="display-2">Display</h1>
                     <h1 className="display-3">Display</h1>
                     <h1 className="display-4">Display</h1>
                     <h1 className="display-5">Display</h1>
                     <h1 className="display-6">Display</h1>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Headings</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p><code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
                     <p className="h1 mb-3">h1. Bootstrap heading</p>
                     <p className="h2 mb-3">h2. Bootstrap heading</p>
                     <p className="h3 mb-3">h3. Bootstrap heading</p>
                     <p className="h4 mb-3">h4. Bootstrap heading</p>
                     <p className="h5 mb-3">h5. Bootstrap heading</p>
                     <p className="h6 mb-0">h6. Bootstrap heading</p>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Lists Unstyled</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>
                     <ul className="list-unstyled">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>
                           Nulla volutpat aliquam velit
                           <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                           </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="col-sm-12 col-lg-6">
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Typography</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
                     <h1>h1. Bootstrap heading</h1>
                     <h2>h2. Bootstrap heading</h2>
                     <h3>h3. Bootstrap heading</h3>
                     <h4>h4. Bootstrap heading</h4>
                     <h5>h5. Bootstrap heading</h5>
                     <h6 className="mb-0">h6. Bootstrap heading</h6>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Inline text elements</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p>Styling for common inline HTML5 elements.</p>
                     <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                     <p><del>This line of text is meant to be treated as deleted text.</del></p>
                     <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                     <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                     <p><u>This line of text will render as underlined</u></p>
                     <p><small>This line of text is meant to be treated as fine print.</small></p>
                     <p><strong>This line rendered as bold text.</strong></p>
                     <p><em>This line rendered as italicized text.</em></p>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Lists Inline</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p>Remove a list’s bullets and apply some light <code>margin</code> with a combination of two classes, <code>.list-inline</code> and <code>.list-inline-item</code>.</p>
                     <ul className="list-inline">
                        <li className="list-inline-item">Lorem ipsum</li>
                        <li className="list-inline-item">Phasellus iaculis</li>
                        <li className="list-inline-item">Nulla volutpat</li>
                     </ul>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Description list alignment</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to truncate the text with an ellipsis.</p>
                     <dl className="row">
                        <dt className="col-sm-3">Description lists</dt>
                        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
                        <dt className="col-sm-3">Euismod</dt>
                        <dd className="col-sm-9">
                           <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                           <p>Donec id elit non mi porta gravida at eget metus.</p>
                        </dd>
                        <dt className="col-sm-3">Malesuada porta</dt>
                        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                        <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                        <dt className="col-sm-3">Nesting</dt>
                        <dd className="col-sm-9">
                           <dl className="row">
                              <dt className="col-sm-4">Nested definition list</dt>
                              <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                           </dl>
                        </dd>
                     </dl>
                  </div>
               </div>
            </div>
         </Row>
    </Fragment>
  );
};

export default Typographys;
