let userName: unknown;
let userId: number;

userName = "Mobin";
userName = "Mihad";

// userId = userName;

function errorThrow(message: string, code: number): never {
  throw { message, code };
}

const error = errorThrow("Throw An Error", 54);

console.log(error);
