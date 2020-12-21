const isContained = (list, item) => {
  if (list)
    for (let index = 0; index < list.length; index++) {
      if (
        list[index] &&
        list[index].default_spec &&
        list[index].default_spec.slug &&
        item &&
        item.default_spec &&
        item.default_spec.slug &&
        list[index].default_spec.slug === item.default_spec.slug
      ) {
        console.log("index:", index);
        return index;
      }
    }
  return -1;
};

const isContained2 = (list, item) => {
  if (list)
    for (let index = 0; index < list.length; index++) {
      if (
        list[index] &&
        list[index] &&
        list[index].slug &&
        item &&
        item.slug &&
        list[index].slug === item.slug
      ) {
        console.log("index:", index);
        return index;
      }
    }
  return -1;
};

//type : add || delete

export const convert = (list, item, type = "add") => {
  let locate = -1;
  locate = item.default_spec
    ? isContained(list, item)
    : isContained2(list, item);
  console.log("locate:", locate);
  switch (type) {
    case "add": {
      console.log("item:", item);
      const newItem = {
        ...Object.fromEntries(Object.entries(item)),
        ...{ number: 1 },
      };
      // console.log(newItem);
      if (locate === -1) list.push(newItem);
      else if (list[locate]) {
        list[locate].number += 1;
      }
      return list;
    }
    case "delete": {
      if (locate === -1) {
        console.log("No value");
        return;
      } else if (list[locate]) {
        if (list[locate].number === 1) list.splice(locate, 1);
        else list[locate].number -= 1;
      }
      return list;
    }
    default: {
      console.log("item default:", item);
      const newItem = {
        ...Object.fromEntries(Object.entries(item)),
        ...{ number: 1 },
      };
      console.log(newItem);
      if (locate === -1) list.push(newItem);
      else if (list[locate]) {
        list[locate].number += 1;
      }
      return list;
    }
  }
  // return;
};

export const change = (list) => {
  const temp =
    list &&
    list.map((listItem, index) => {
      return {
        ...Object.fromEntries(
          Object.entries(
            listItem.default_spec ? listItem.default_spec : listItem
          )
        ),
        ...{
          key: index,
          number: listItem?.number,
          total: listItem.default_spec
            ? listItem.default_spec.price * listItem?.number
            : listItem.price * listItem?.number,
        },
      };
    });
  return temp;
};

// let a = [{
//     "default_spec": {
//         "name": "Lenovo Legion 5 15ARH05",
//         "model": "82B500FXVN",
//         "manufacturer": "Lenovo",
//         "processor": "AMD Ryzen 5 4600H",
//         "color": ["Black"],
//         "graphic_card": "NVIDIA GeForce GTX 1650 4GB GDDR6",
//         "memory": [
//             {
//                 "capacity": 8,
//                 "speed_bus": 3200,
//                 "cas": "16",
//                 "text": "8GB SO-DIMM DDR4-3200"
//             }
//         ],
//         "storage": [
//             {
//                 "capacity": 512,
//                 "type": "SSD NVMe",
//                 "text": "512GB SSD M.2 2280 PCIe NVMe"
//             }
//         ],
//         "display": [
//             {
//                 "resolution": "1920x1080",
//                 "size": 14,
//                 "panel": "IPS",
//                 "more_info": "300nits Anti-glare, 144Hz, 100% sRGB, Dolby Vision"
//             }
//         ],
//         "features": [
//             {
//                 "name": "Keyboard",
//                 "more_info": "Backlit, English"
//             },
//             {
//                 "name": "Battery",
//                 "more_info": "Integrated 60Wh"
//             },
//             {
//                 "name": "Camera",
//                 "more_info": "720p"
//             }
//         ],
//         "operating_system": [
//             "Windows 10",
//             "Ubuntu"
//         ],
//         "images": [],
//         "description": "Laptop gaming best nhat cua nam, thay ai cung mua het a' nghe.",
//         "quantity": 50,
//         "price": 23690000,
//         "discount": 5,
//         "slug": "Lenovo-Legion-5-15ARH05"
//     },
//     "options": [
//         {
//             "slug": "Lenovo-Legion-5-15ARH05-16GB-RAM",
//             "memory": [
//                 {
//                     "capacity": 8,
//                     "speed_bus": 3200,
//                     "text": "8GB SO-DIMM DDR4-3200"
//                 },
//                 {
//                     "capacity": 8,
//                     "speed_bus": 3200,
//                     "text": "8GB SO-DIMM DDR4-3200"
//                 }
//             ],
//             "price": 23690000,
//             "discount": 10
//         }
//     ]
// },
// {
//     "default_spec": {
//         "name": "Lenovo Legion 6 15ARH05",
//         "model": "82B500FXVN",
//         "manufacturer": "Lenovo",
//         "processor": "AMD Ryzen 6 4600H",
//         "color": ["Black"],
//         "graphic_card": "NVIDIA GeForce GTX 1650 4GB GDDR6",
//         "memory": [
//             {
//                 "capacity": 8,
//                 "speed_bus": 3200,
//                 "cas": "16",
//                 "text": "8GB SO-DIMM DDR4-3200"
//             }
//         ],
//         "storage": [
//             {
//                 "capacity": 512,
//                 "type": "SSD NVMe",
//                 "text": "512GB SSD M.2 2280 PCIe NVMe"
//             }
//         ],
//         "display": [
//             {
//                 "resolution": "1920x1080",
//                 "size": 14,
//                 "panel": "IPS",
//                 "more_info": "300nits Anti-glare, 144Hz, 100% sRGB, Dolby Vision"
//             }
//         ],
//         "features": [
//             {
//                 "name": "Keyboard",
//                 "more_info": "Backlit, English"
//             },
//             {
//                 "name": "Battery",
//                 "more_info": "Integrated 60Wh"
//             },
//             {
//                 "name": "Camera",
//                 "more_info": "720p"
//             }
//         ],
//         "operating_system": [
//             "Windows 10",
//             "Ubuntu"
//         ],
//         "images": [],
//         "description": "Laptop gaming best nhat cua nam, thay ai cung mua het a' nghe.",
//         "quantity": 50,
//         "price": 266660000,
//         "discount": 5,
//         "slug": "Lenovo-Legion-6-15ARH05"
//     },
//     "options": [
//         {
//             "slug": "Lenovo-Legion-6-15ARH05-16GB-RAM",
//             "memory": [
//                 {
//                     "capacity": 8,
//                     "speed_bus": 3200,
//                     "text": "8GB SO-DIMM DDR4-3200"
//                 },
//                 {
//                     "capacity": 8,
//                     "speed_bus": 3200,
//                     "text": "8GB SO-DIMM DDR4-3200"
//                 }
//             ],
//             "price": 26690000,
//             "discount": 10
//         }
//     ]
// }];
// console.log(change(a));
