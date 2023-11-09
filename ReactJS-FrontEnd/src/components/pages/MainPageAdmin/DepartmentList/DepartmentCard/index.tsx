import { StyleDepartmentCard } from "./style";

export const DepartmentCard = ({ department }: any) => {
  return (
    <StyleDepartmentCard>
      <div className="left-data">
        <h4 className="title-department">{department.name}</h4>
        <p className="description-department">{department.description}</p>
        <p className="company-name">Company name</p>
      </div>

      <div className="right-data">
        <span className="view">
          <img src="" alt="img-view" />
        </span>
        <span className="edit-department">
          <img src="" alt="edit" />
        </span>
        <span className="remove-department">
          <img src="" alt="remove" />
        </span>
      </div>
    </StyleDepartmentCard>
  );
};
