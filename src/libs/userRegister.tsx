const userRegister = async (
  username: string,
  email: string,
  password: string,
  tel: string
) => {
  const response = await fetch(
    "https://vaccine-app-backend.vercel.app:443/api-informations/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        telephone: tel,
        role: "user",
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return await response.json();
};

export default userRegister;
