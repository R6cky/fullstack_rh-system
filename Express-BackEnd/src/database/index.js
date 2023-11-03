const {
  createAdmService,
  createEmployeeService,
} = require("../services/employee.service");
const { createCategoryService } = require("../services/category.service");
const { companyCreateService } = require("../services/company.service");
const { createDepartmentService } = require("../services/department.service");

const users = [
  {
    name: "Felipe",
    email: "felipe@mail.com",
    password: "1234",
  },
  {
    name: "Ruan",
    email: "ruan@mail.com",
    password: "1234",
  },
  {
    name: "Jorge",
    email: "jorge@mail.com",
    password: "1234",
  },
  {
    name: "João",
    email: "joao@mail.com",
    password: "1234",
  },
  {
    name: "Bruna",
    email: "bruna@mail.com",
    password: "1234",
  },
  {
    name: "Ricardo",
    email: "ricardo@mail.com",
    password: "1234",
  },
  {
    name: "Joana",
    email: "joana@mail.com",
    password: "1234",
  },
];

const categories = [
  {
    name: "Alimenticio",
  },
  {
    name: "Varejo",
  },
  {
    name: "Textil",
  },
  {
    name: "Manufatura",
  },
  {
    name: "Aeroespacial",
  },
  {
    name: "Automotiva",
  },
  {
    name: "TI",
  },
  {
    name: "Atacado",
  },
];

async function createUsers() {
  const newAdm = await createAdmService({
    name: "Admin",
    email: "admin@mail.com",
    password: "123456",
    is_adm: true,
    company_id: "adm_level",
  });

  console.log(`
  Usuário admin criado com sucesso!
  Utilize as seguintes credenciais:
  email: admin@mail.com
  password: 123456
  `);

  users.forEach(async (user) => {
    await createEmployeeService(user);

    console.log(`usuário ${user.name} criado com sucesso`);
  });

  let newCategories = [];

  categories.forEach(async (category, index) => {
    const newCategory = await createCategoryService(category, newAdm.id);

    newCategories[index] = newCategory

    console.log(`Categoria ${category.name} criada com sucesso`);
  });

  setTimeout(async () => {
    await companyCreateService(
      {
        name: "Gela Guela",
        description: "Sorvetes barateza",
        category_id: newCategories[0].id,
      },
      newAdm.id
    );
    console.log("Empresa Gela Guela criada com sucesso");

    await companyCreateService(
      {
        name: "Skina Lanches",
        description: "Podrão de qualidade",
        category_id: newCategories[0].id,
      },
      newAdm.id
    );
    console.log("Empresa Skina Lanches criada com sucesso");

    await companyCreateService(
      {
        name: "Mercado Kenzie",
        description: "Padrão de qualidade",
        category_id: newCategories[1].id,
      },
      newAdm.id
    );
    console.log("Empresa Mercado Kenzie criada com sucesso");

    await companyCreateService(
      {
        name: "Gortifruti da Terra",
        description: "Natural e sem agrotóxicos",
        category_id: newCategories[1].id,
      },
      newAdm.id
    );
    console.log("Empresa Gortifruti da Terra criada com sucesso");

    await companyCreateService(
      {
        name: "Tecidos Dona Florinda",
        description: "Nossos tecidos são nossos tesouros",
        category_id: newCategories[2].id,
      },
      newAdm.id
    );
    console.log("Empresa Tecidos Dona Florinda criada com sucesso");

    await companyCreateService(
      {
        name: "Malhas Alberto",
        description:
          "Compre suas roupas de academia aqui! melhor preço da região",
        category_id: newCategories[2].id,
      },
      newAdm.id
    );
    console.log("Empresa Malhas Alberto criada com sucesso");

    await companyCreateService(
      {
        name: "DevModa",
        description: "Roupas para um estilo de uma pessoa desenvolvedora",
        category_id: newCategories[3].id,
      },
      newAdm.id
    );
    console.log("Empresa DevModa criada com sucesso");

    await companyCreateService(
      {
        name: "Edna Moda",
        description: "Roupas de grifes, mas sem capas",
        category_id: newCategories[3].id,
      },
      newAdm.id
    );
    console.log("Empresa Edna Moda criada com sucesso");

    await companyCreateService(
      {
        name: "KenzieX",
        description: "Levando nossos desenvolvedores a outro mundo",
        category_id: newCategories[4].id,
      },
      newAdm.id
    );
    console.log("Empresa KenzieX criada com sucesso");

    await companyCreateService(
      {
        name: "Evolution Tech",
        description:
          "Focamos nossos estudos e desenvolvimento em foguetes melhores e mais rapidos!!",
        category_id: newCategories[4].id,
      },
      newAdm.id
    );
    console.log("Empresa Evolution Tech criada com sucesso");

    await companyCreateService(
      {
        name: "Boacharria",
        description: "Se furar o pneu, conta comigo",
        category_id: newCategories[5].id,
      },
      newAdm.id
    );
    console.log("Empresa Boacharria criada com sucesso");

    await companyCreateService(
      {
        name: "Offcina",
        description: "Arrumamos seu carro",
        category_id: newCategories[5].id,
      },
      newAdm.id
    );
    console.log("Empresa Offcina criada com sucesso");

    const nerdLab = await companyCreateService(
      {
        name: "Nerd lab",
        description: "Criamos um site rapidão pra você",
        category_id: newCategories[6].id,
      },
      newAdm.id
    );
    console.log("Empresa Nerd lab criada com sucesso");

    await companyCreateService(
      {
        name: "Chipset manutenções",
        description: "Arrumamos o PC",
        category_id: newCategories[6].id,
      },
      newAdm.id
    );
    console.log("Empresa Skina Lanches criada com sucesso");

    // criando departamentos
    await createDepartmentService(
      {
        name: "TI",
        description: "Departamento de TI",
        company_id: nerdLab.id,
      },
      newAdm.id
    );
    console.log("Departamento TI da empresa Nerd Lab criado com sucesso");

    await createDepartmentService(
      {
        name: "RH",
        description: "Recrutamento e seleção",
        company_id: nerdLab.id,
      },
      newAdm.id
    );
    console.log("Departamento RH da empresa Nerd Lav criado com sucesso");

    await companyCreateService(
      {
        name: "Mercado Popular",
        description: "Melhor preço e qualidade!!",
        category_id: newCategories[7].id,
      },
      newAdm.id
    );
    console.log("Empresa Mercado Popular criada com sucesso");

    await companyCreateService(
      {
        name: "Atacadão Kenzie",
        description: "Liquidamos todas as ofertas!!",
        category_id: newCategories[7].id,
      },
      newAdm.id
    );
    console.log("Empresa Atacadão Kenzie criada com sucesso");
  }, 10000);
}

const adm = createUsers()
  .then((res) => res)
  .catch((err) => console.log(err));

// seed();
