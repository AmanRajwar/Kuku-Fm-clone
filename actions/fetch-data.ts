'use server'
let data1: any = null;
let data2: any = null;

async function getData(index: number) {
  try {
    const res = await fetch(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${index}&lang=english`)
    return res.json()
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
 
}


export async function fetchShows(index: number) {

  try {
    if (data1 == null || data2 == null) {
      [data1, data2] = await Promise.all([getData(1), getData(2)])

    }
    if (index == 1) {
      return data1;
    } else {
      return data2;
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}