export const loadData = async () => {
  try {
    const res = await fetch(`/api/projects`, {
      method: "GET",
    });

    const result = await res.json();

    if (result.success) {
      return result.data;
    } else {
      return `Error: ${result.message}`;
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
