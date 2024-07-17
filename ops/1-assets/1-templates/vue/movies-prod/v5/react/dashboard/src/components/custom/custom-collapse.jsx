import React, { Fragment, memo } from "react";

import { Button, Collapse, Table } from "react-bootstrap";

const CustomCollapse = memo((props) => {
  return (
    <Fragment>
      <Collapse in={props.open}>
        <Table striped className="mb-0">
          <tbody>
            <tr>
              <td className="text-center">
                {props.title}
                <span className="ms-5">
                  <input
                    type="checkbox"
                    id="role-manager-permission-branch_gallery"
                    name="permission[branch_gallery][]"
                    value="manager"
                    className="form-check-input"
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Collapse>
    </Fragment>
  );
});

CustomCollapse.displayName = "CustomCollapse";
export default CustomCollapse;
