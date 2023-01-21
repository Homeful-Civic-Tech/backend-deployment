/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("shelters").del();

  await knex("shelters").insert([
    {
      shelter_name: "Magnolia House",
      location: "1424 Herkimer St, Brooklyn, NY 11233",
      phone_num: "(718) 675-3353",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bbMN2XbYYRzvgfrgw9YW2Dfhqc5RzN_ZSA&usqp=CAU",
        "https://s7d2.scene7.com/is/image/TWCNews/shelter_jpg-4",
      ],
      category: "Woman",
      hours: "8AM-6PM",
    },
    {
      shelter_name: "HELP Woman’s Shelter",
      location: "104-152 Williams Ave, Brooklyn, NY 11207",
      phone_num: "(718) 456-7089",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7j3yEj-9ys-4laX_G48E6QdXlc7Elkni6Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJllMx0VtoLu_-TwF3GYvwoQFw_-stkfHfPHYReJwdTMY3BYke4AW3hYHHcvv1nliR_M&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZQ__6Nz03KKb-ARIS8S1pWCHgn-keAb43fa4kJbJkwJlywq-TvoyFYWjLGcra8YfqIg&usqp=CAU",
      ],
      category: "Woman",
      hours: "8AM–9:30PM",
    },
    {
      shelter_name: "Tillary Street Woman’s Shelter",
      location: "200 Tillary St, Brooklyn, NY 11201",
      phone_num: "(718) 855-7485",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDEQFJ2h9vfKwfjDAhav3BVj1xe0IpY2btw&usqp=CAU",
      ],
      category: "Woman",
      hours: "8AM–9:30PM",
    },
    {
      shelter_name: "Park Slope Armory YMCA",
      location: "1402 8th Ave, Brooklyn, NY 11215",
      phone_num: "(718) 369-7226",
      url: [
        "https://bethanyhouseservices.org/wp-content/uploads/2016/04/BHS-Shelter-5-1-14-c.jpg",
      ],
      category: "Woman",
      hours: "10AM-10PM",
    },
    {
      shelter_name: "Providence House",
      location: "703 Lexington Ave, Brooklyn, NY 11221",
      phone_num: "(718) 455-0197",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsmc-QFlTffSoS71GzE_0t1HaJ4JiW-L0ig&usqp=CAU",
      ],
      category: "Woman",
      hours: "(718) 455-0197",
    },
    {
      shelter_name: "HELP Brownsville Womans Center",
      location: "357 Saratoga Ave, Brooklyn, NY 11233",
      phone_num: "(718) 345-3649",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6XvpNWRj13zUgMkbXNtFzGXh9BYGHajBHw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2tDrx_GQcvB7Vz21HjyrBGwNyRraw_bqWg&usqp=CAU",
      ],
      category: "Woman",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Woodruff Family Resid",
      location: "155 Woodruff Ave, Brooklyn, NY 11226",
      phone_num: "(718) 546-7453",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptqSVRasXkesgzT7FqhVmlcOj3R2D5ZcT4PyGXfbUFf4GhA8tkH8b2SlNn3eZOV2ug6k&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptqSVRasXkesgzT7FqhVmlcOj3R2D5ZcT4PyGXfbUFf4GhA8tkH8b2SlNn3eZOV2ug6k&usqp=CAU",
      ],
      category: "Woman",
      hours: "9AM-10PM",
    },
    {
      shelter_name: "Help Woman Center",
      location: " 116 Williams Ave, Brooklyn, NY 11207",
      phone_num: "(718) 483-7700",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGiGW7XRgXLEO5JpM9_-IsgSETaBU-KGuVg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQz0l1ODpqx4AJmSPAkeKAU5hHO_GFwYTxp1BWsNyuVX6jMaw3UOjvotx4rFwe8eSwDM&usqp=CAU",
      ],
      category: "Woman",
      hours: "9AM-10PM",
    },
    {
      shelter_name: "Samaritan Village",
      location: "645 Hendrix St, Brooklyn, NY 11207",
      phone_num: "(718) 206-2000",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQmW0NOp2H76s5QM1NbJiI6POVo7K9AUYlw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOrjwKkyFajj7dO1h1-emUD37ZC-ZeALllXfV52zaoatBbapQjZg-ibwClP203mJEO4w&usqp=CAU",
      ],
      category: "Woman",
      hours: "8AM-10PM",
    },
    {
      shelter_name: "DeKalb Avenue Transitional Housing Program",
      location: "1154 DeKalb Ave, Brooklyn, NY 11221",
      phone_num: " (347) 226-4169",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtR95979Q_vTiCOEkg1Jz9YFVZAOterA_LBg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmH-nlJ7LgMKfa7-78ta5go7sBvZVRZPYqrQfYXcIlJRbBYuhizrL6U2pFtCOFFpN1i0&usqp=CAU",
      ],
      category: "Woman",
      hours: "9AM-6PM",
    },
    {
      shelter_name: "Barbara Kleiman Residence",
      location: "300 Skillman Ave, Brooklyn, NY 11211",
      phone_num: "(718) 963-3800 ",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcM-_pkbjbmU5td47T0dcZoIOzYJugpMCQbA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwYtVzf_eVV3MrUYVLB-a6SB2UgkQziGV2g&usqp=CAU",
      ],
      category: "Woman",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Atlantic House man’s Shelter",
      location: "2402 Atlantic Ave, Brooklyn, NY 11233",
      phone_num: "(718) 385-8713",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88pNvbEJuItsZw0xvA7foakadkkvIeF6Ylg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEe6m1six-vSWwEVmAhyAw4doVZZfnA--Hw6Pd6AYbJy25G0frI87LQ6BFl_dcGzVGEtE&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Kingsborough Star mans Shelter",
      location: "599 Clarkson Ave, Brooklyn, NY 11203 ",
      phone_num: "(718) 363-4797",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT303YmW9CyDiWkOGfV8VxRnvNd6I99Dd42m0BqvkMYuV51mXzkXd2WFudy9gG_Ggj9guE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEBgKPefVx9UisPXsY11L1t2_G-ES01XCVpT1h32QfVVFUIn75a85b6CjjtQZHYIwRLI&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Salvation Army mans Shelter",
      location: "681 Albany Ave, Brooklyn, NY 11203",
      phone_num: "(718) 363-7738",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1B-Zm-brIiMzQdGq8NGl4FtodWEBPkM_O2g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0zsfgWtH7FxV2pcjWEHXHByNxqLgJzD51Q&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Linden mans Shelter",
      location: "501 New Lots Ave, Brooklyn, NY 11207 ",
      phone_num: "(718) 688-8955",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gdx5HGOeUgYJE9zkkZdiNvRSFdJ7RGL_pQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAjVf5N8KOfMCqyWSj0MoSu1W_8PY2l7JsPpY2hgfSPman3ei1h6BFrliS9m9noJdnvs&usqp=CAU",
      ],
      category: "Man",
      hours: "9AM-12AM",
    },
    {
      shelter_name: "Atlantic Armory Shelter",
      location: "1322 Bedford Ave, Brooklyn, NY 11216 ",
      phone_num: "(718) 636-3908",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZc4xBbBIDU5fv4GiH7EG8A-8RZEZ6avKi7Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKUODL3SlrdyrmXRKYJj689eNrR6ZGQNYcofKYZXEGr4gc7RvqMV_474BxvlPCCx4YGI&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "CAMBA mans Shelter",
      location: "Prince St, Brooklyn, NY 11201",
      phone_num: "(718) 797-0285",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMYx9fIRW6sFmlfI7OVOTAPpDiGMGifFYznf8tlIP_hUB9lUUJYOmOajO_DZNkhbSjSo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlLws1mSR8lspVxvOiHjr-zpTDvpFFbIe5A&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Samaritan Village Forbell",
      location: "338 Forbell St, Brooklyn, NY 11208",
      phone_num: "(718) 277-1697",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQDsx4MmMAtt6rJ42qke6U5gGdRdNBDtUeQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT555_J48KqWKjM_IaGs6chNJ3F-9iYpYk0Edlg8R7Ucl0l46w-jCaiuK1BMxdVo7CnVpU&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Healthy Living Housing",
      location: "398 Bainbridge St., Brooklyn, NY 11233",
      phone_num: "(718) 552-2942",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C9tVt7ljCTMIE4p4I-PXGXexNCiKfMn6vUP6zJIFspXvtTqqHZsiHQ9UzubKoSM-UfE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXBZLbALGqh5Oo_rJCzJ1Qsqm4wuV3PVG6g&usqp=CAU",
      ],
      category: "Man",
      hours: "8AM-5PM",
    },
    {
      shelter_name: "13th Regimant Armory",
      location: "357 Marcus Garvey Blvd, Brooklyn, NY 11221",
      phone_num: "(718) 574-2525",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5b3_MKl4BUGZaShv8MFthbbZnMah8oIb0vW26ksd3edUorWHfhiyGyNyBAg9nsO3tKA0&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuA_5_vL1Qndjqf3mUiGbq7_rNMAhTWm6hM0BDstLrcKofhu5HhTlLvKAxmUWMUUTNDFs&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Ready Willing and Able",
      location: " 520 Gates Ave, Brooklyn, NY 11216",
      phone_num: "(718) 628-3223",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOsWcuK_m3tn-AW6m7RVHM30xWjoSaSjh_J1zkl61fDx671FzEUra1I4eEEwJrvXaUgg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNy0x0SoYLRlV0RNzLJHTB0F95y86-gn7G7g&usqp=CAU",
      ],
      category: "Man",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "The Kensington Family Shelter",
      location: "385 McDonald Ave, Brooklyn, NY 11218",
      phone_num: " (718) 226-0425",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnVgT-Wb5LUuWly69Gxx-c5J14G2CNOap1w&usqp=CAU",
        "https://npr.brightspotcdn.com/dims4/default/cfcbe19/2147483647/strip/true/crop/1000x744+0+0/resize/880x655!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkwmu%2Ffiles%2F201504%2Fgateway_180_shelter_beds.jpg",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Win Shelter",
      location: "4612 Glenwood Rd, Brooklyn, NY 11234",
      phone_num: "(718) 975-6886",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm-ruBOgNMm8Efc76af0vonjKYiNh6YEO2A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYKtV9kNzjZdwAZd8aBDUwOlXkoPFfMWx2w&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Urban Strategies Family Support",
      location: "829 Saratoga Ave, Brooklyn, NY 11212",
      phone_num: "(718) 346-2539",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUUOKMLx_SDTJT8Qre0VejMBaPCioKJCoW5P_VQWL2NT6IK18lQXCTaBuzQ8kUDmqTR4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYKzHLgiWsBEAxBr_QIVUCNEn3UBctV88cw&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Montefiore at Saint Johns Family Shelter",
      location: "1630 St Johns Pl, Brooklyn, NY 11233",
      phone_num: " (718) 771-7720",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRGbtfBrf56Ad3BjGS7a0GS5l_R2hO2HpCT84cVsRfC6BIWJ_GKjGPKcI8l6v62SCJJY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9OQA7_c-1nSFi_A3AVFD1XugLp2T02C0eQ&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Albemarle Family Residence",
      location: "2514 Albemarle Rd, Brooklyn, NY 11226",
      phone_num: "(718) 257-4456",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdodOQhfzIVf3-TfhRBXcjCehKMRmC7kmxA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKheA8eR-gptQaEelsr4_dxuoanqhy_fuJ5g&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Stockholm Family Shelter - SCO Family of Services",
      location: "99 Stockholm St #103, Brooklyn, NY 11221",
      phone_num: "(718) 574-2200",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwJPzeAVjgf4Lgi7xLPIakAZf-xDAcshUpQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmRjurChDzxUxoI-uGRVfV0PRDsgewRWhsQ&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Star Bright Family Residence",
      location: "615 E 104th St Apt 403, Brooklyn, NY 11236",
      phone_num: "(718) 649-2390",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5KjWmAc6GqDvHfzuPZ1v9UzC7S5tffhhlQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKNgTGcjOkF38bIbja_9wGAxK9vQarfjTKQ&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Flagstone Family Center",
      location: "199 Amboy St, Brooklyn, NY 11212",
      phone_num: "(718) 342-5107",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUABr1ZSTJKS7Bw-AsenCyfWQS39iy1XcqAQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7DTvKV12kpcnEk9_eo9HR8zRJxlA1kApcg&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Flatlands Family Residence",
      location: "108-75 Avenue D, Brooklyn, NY 11236",
      phone_num: "(718) 688-8350",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEebd1aLw05G5c8cjDumCfZZ0GrVxqqbBZAw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRid5GrgxKvMGFM4BJNzoXUi1jGJroHHXMb3g&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Shelter",
      location: "51 Junius St, Brooklyn, NY 11212",
      phone_num: "(718) 675-4664",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aZEGVh8tiSmX86HetTQ_NkIb0QoPx8mFzg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAwLwJg1BSMPEmf0LRt2blv_0PM30xvW-pA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95GaOpXGqjCIodaLMn3eSXCGe_1vnKUuT0Q&usqp=CAU",
      ],
      category: "Family",
      hours: "9AM-8PM",
    },
    {
      shelter_name: "HELP USA",
      location: "515 Blake Ave, Brooklyn, NY 11207",
      phone_num: "(347) 546-7427",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB2VommILgpXNR-td-0NIrBTCLVNmTfWNqw_zwd9fIONELFoq07esfCrxteukeLLL7a8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FS0QwzTlBL53OXxRkJ4yWfzNH4YvtZ9GTA&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
    {
      shelter_name: "Family Center-West Brooklyn",
      location: "191 Joralemon St # 1, Brooklyn, NY 11201",
      phone_num: "(718) 722-6001",
      url: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlj5YBveYnrwXDd0RZPSoSi_5MbKeJ_9hIg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJYaY27PojepQGrrJsktTC0FKv-28kkye9PzM9OTUDO5mlWwQ-qn83lwz_YwkTEVaZzU&usqp=CAU",
      ],
      category: "Family",
      hours: "Open 24 hours",
    },
  ]);
};
