import { StyleDepartmentCard } from "./style";

export const DepartmentCard = () => {
  return (
    <>
      <StyleDepartmentCard>
        <div className="left-data">
          <h4 className="title-department">Nome do departamento</h4>
          <p className="description-department">description depart</p>
          <p className="company-name">Company name</p>
        </div>

        <div className="right-data">
          <span className="view-department">
            <img src="" alt="img-view" />
          </span>
          <span className="edit-department">
            <img src="" alt="edit-department" />
          </span>
          <span className="remove-department">
            <img src="" alt="remove-department" />
          </span>
        </div>
      </StyleDepartmentCard>
    </>
  );
};
