import { Fragment, memo,useState, ReactNode } from "react";

// react-bootstrap
import {Collapse, Form} from 'react-bootstrap'

// Next-Link
import Link from "next/link";

interface ShopCategorySidebarProps{
    children?:ReactNode
}

const ShopCategorySidebar = memo((props:ShopCategorySidebarProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="shop-box">
          <h5 className="mb-4 text-uppercase">Product categories</h5>
          <ul className="list-unstyled p-0 m-0 shop-list-checkbox">
              <li>
                  Activeman (4)
              </li>
              <li>
                  <div className="d-flex align-items-center justify-content-between">
                      <span>Disney World (2)</span>
                      <Link className="checkbox" onClick={() => setOpen(!open)}  href="#" role="button">
                      </Link>
                  </div>
                  <Collapse in={open}>
                      <ul className="list-unstyled ps-2 mt-3">
                          <li>Fantasia (1)</li>
                      </ul>
                  </Collapse>
              </li>
              <li>
                  Galaxy Heaven (1)
              </li>
              <li>
                  Haunted Halloween (6)
              </li>
              <li>
                  Marvel Studios (3)
              </li>
              <li>
                  Monster-House (4)
              </li>
              <li>
                  Quid Game (1)
              </li>
              <li>
                  The Flashv (1)
              </li>
              <li>
                  The Madrid (3)
              </li>
              <li>
                  The-Champion(4)
              </li>
              <li>
                  Uptight Birds (1)
              </li>
              <li>
                  Warner Bros Films (2)
              </li>
          </ul>
      </div>
      <div className="shop-box">
    <h5 className="">PRICE FILTER </h5>
    <div className="form-group my-4 product-range">
        <div className="range-slider" id="product-price-range">
        <Form.Range min={0} max={50} step={5} defaultValue={10}/>
        </div>
    </div>
    <div className=" d-flex align-items-center my-3">
        <small>Price: &nbsp;</small>
        <small id="lower-value">&nbsp; $11</small>
        <small id="lower-value1">&nbsp; - &nbsp;</small>
        <small id="upper-value">&nbsp;$50</small>
    </div>
</div>
<div className="shop-box">
    <h5 className="mb-4">PRODUCT SIZE</h5>
    <ul className="shop_list_checkbox list-unstyled">
        <li>
            <label className="shop_checkbox_label">L</label>
            <input type="hidden" value="L" />
        </li>
        <li>
            <label className="shop_checkbox_label">M</label>
            <input type="hidden" value="M" />
        </li>
        <li>
            <label className="shop_checkbox_label">S</label>
            <input type="hidden" value="S" />
        </li>
    </ul>
</div>
<div className="shop-box border-bottom-0">
<h5 className="mb-4">PRODUCTS</h5>

      {props.children}
</div>
    </Fragment>
  );
});
ShopCategorySidebar.displayName = "ShopCategorySidebar"
export default ShopCategorySidebar;
