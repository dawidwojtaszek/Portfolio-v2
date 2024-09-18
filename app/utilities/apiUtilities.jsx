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

export const loadProjectData = async (slug) => {
  try {
    const res = await fetch(`${process.env.URL}/api/projects/${slug}`, {
      method: "GET",
      cache: "no-store",
      // TODO remove option above
    });

    const result = await res.json();

    if (result.success) {
      // TODO SROT by ID
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
