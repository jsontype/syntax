import { Fragment, memo, useState } from "react";

// react-bootstrap
import { Collapse, Form } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const ShopCategorySidebar = memo((props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="shop-box">
        <h5 className="mb-4 text-uppercase">{t("shop.product_categories")}</h5>
        <ul className="list-unstyled p-0 m-0 shop-list-checkbox">
          <li>{t("shop.activeman")}</li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <span>{t("shop.disney_world")}</span>
              <Link
                className="checkbox me-3 me-md-0"
                onClick={() => setOpen(!open)}
                to="#"
                role="button"
              ></Link>
            </div>
            <Collapse in={open}>
              <ul className="list-unstyled ps-2 mt-3">
                <li>{t("shop.fantasia")}</li>
              </ul>
            </Collapse>
          </li>
          <li>{t("shop.galaxy_heaven")}</li>
          <li>{t("shop.haunted_halloween")}</li>
          <li>{t("shop.marvel_studios")}</li>
          <li>{t("shop.monster_house")}</li>
          <li>{t("shop.quick_game")}</li>
          <li>{t("shop.the_flashv")}</li>
          <li>{t("shop.the_madrid")}</li>
          <li>{t("shop.the_champion")}</li>
          <li>{t("shop.uptight_birds")}</li>
          <li>{t("shop.warner_bros_films")}</li>
        </ul>
      </div>
      <div className="shop-box">
        <h5 className="">{t("shop.price_filter")}</h5>
        <div className="form-group my-4 product-range">
          <div className="range-slider" id="product-price-range">
            <Form.Range min={0} max={50} step={5} defaultValue={10} />
          </div>
        </div>
        <div className=" d-flex align-items-center my-3">
          <small>{t("shop.price")} : &nbsp;</small>
          <small id="lower-value">&nbsp; $11</small>
          <small id="lower-value1">&nbsp; - &nbsp;</small>
          <small id="upper-value">&nbsp;$50</small>
        </div>
      </div>
      <div className="shop-box">
        <h5 className="mb-4">{t("shop.product_size")}</h5>
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
        <h5 className="mb-4">{t("shop.product")}</h5>

        {props.children}
      </div>
    </Fragment>
  );
});
ShopCategorySidebar.displayName = "ShopCategorySidebar";
export default ShopCategorySidebar;
