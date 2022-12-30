const products = [
  {
    "title": "Fancy Feast Grilled Seafood Feast Variety Pack Canned Cat Food",
    "price": 190000,
    "description": "Variety pack of gourmet cat food keeps finicky eaters interested and eating with palatable flavors. Serve alone or mix with dry food for a delectable texture—it’s a great way to add moisture to your cat’s diet. Made in the USA with vitamins and minerals, delivering a 100% complete and balanced nutrition.",
    "image": "https://image.chewy.com/is/image/catalog/76096_MAIN._AC_SL1200_V1667518942_.jpg",
    "category": "Wet Food",
    "rating": {
      "rate": 5,
      "count": 100
    }
  },
  {
    "title": "Friskies Surfin' & Turfin' Favorites Variety Pack Canned Cat Food, 5.5-oz, case of 40",
    "price": 650000,
    "description": "40 mouth-watering meals for your mini mate. Convenient 5.5-ounce cans of high-protein wet cat food. Purr-pared to provide 100% complete and balanced nutrition. Features shredded chunks of poultry, meat or fish and savory gravy or juice.  Crafted with the tempting textures that cats love and flavors that are paw-sitively irresistible.",
    "image": "https://image.chewy.com/is/image/catalog/142563_MAIN._AC_SL1200_V1590595282_.jpg",
    "category": "Wet food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Friskies Shreds Variety Pack Canned Cat Food",
    "price": 350000,
    "description": "Variety pack features satisfying recipes with real meat for the high-protein nutrition and flavor your little carnivore craves. Enhanced with vitamins and minerals for overall well-being, and essential taurine for heart and vision health. Provides a 100% complete and balanced meal for cats and kittens, on its own or as a delicious kibble topper.",
    "image": "https://image.chewy.com/is/image/catalog/148074_MAIN._AC_SL1200_V1657655672_.jpg",
    "category": "wet food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm Tấm",
    "price": 45000,
    "description": "Cơm tấm, cơm sườn, hay Cơm tấm Sài Gòn là một món ăn Việt Nam có nguyên liệu chủ yếu từ gạo tấm. Dù có nhiều tên gọi ở các vùng miền khác nhau, tuy nhiên nguyên liệu và cách thức chế biến của món ăn trên gần như là giống nhau.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796657/Food%20Store/Vietnam/com_tam_ihgclz.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 10
    }
  },
  {
    "title": "Gỏi",
    "price": 30000,
    "description": "Nộm, trong phương ngữ miền Nam gọi là gỏi, là tên gọi chung cho các món rau trộn chua ngọt trong ẩm thực Việt Nam.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796657/Food%20Store/Vietnam/goi_eb4ukj.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }

  },
  {
    "title": "Gỏi Cuốn",
    "price": 55000,
    "description": "Gỏi cuốn hay còn được gọi là nem cuốn, là một món ăn khá phổ biến ở Việt Nam. Gỏi cuốn có xuất xứ từ Miền nam Việt Nam với tên gọi là gỏi cuốn - bằng các nguyên liệu gồm rau xà lách, húng quế, tía tô, tôm khô, rau thơm, thịt luộc, tôm tươi.. tất cả được cuộn trong vỏ bánh tráng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796657/Food%20Store/Vietnam/goi_cuon_izu49q.webp",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }

  },
  {
    "title": "Bánh Mì",
    "price": 25000,
    "description": "Bánh mì Việt Nam là một món ăn Việt Nam, với lớp vỏ ngoài là một ổ bánh mì nướng có da giòn, ruột mềm, còn bên trong là phần nhân. Tùy theo văn hóa vùng miền hoặc sở thích cá nhân, người ta có thể chọn nhiều nhân bánh mì khác nhau. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796656/Food%20Store/Vietnam/banh_mi_ky4ec5.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt kho Đông Pha",
    "price": 60000,
    "description": "Nói đến các món ăn truyền thống của Trung Quốc chắc chắn người ta sẽ không thể bỏ qua món thịt kho Đông Pha nức tiếng. Đây không phải là một món ăn nổi tiếng với vùng đất nào mà đơn giản chúng được đặt tên theo nhà thơ Tô Đông Pha – người đã chế biến ra món ăn này lần đầu tiên. Miếng thịt thơm ngon hấp dẫn với màu sắc và hương vị rất đặc trưng khiến nhiều người yêu thích.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798590/Food%20Store/China/thit-kho-dong-pha_u4qsyl.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sủi cảo",
    "price": 40000,
    "description": "Sủi cảo là một món điểm tâm rất đặc trưng của Trung Quốc, được chế biến bằng phương pháp hấp. Đây là một loại bánh được người dân Trung Quốc làm món ăn chính trong dịp mừng năm mới, một loại bánh cổ truyền giống như bánh chưng của Việt Nam. Món bánh biểu trưng cho sự may mắn, sum họp đầu năm của tất cả thành viên trong gia đình.Bột làm bánh sủi cảo bao gồm hai loại là gạo nếp và gạo tẻ. Về phần nhân bánh, tùy vào sở thích khác nhau của từng người, người ta có thể chế biến nhân bánh từ thịt lợn hoặc thịt bò cùng các loại rau được băm nhuyễn và trộn đều. Bánh có hình bán nguyệt, dùng kèm theo nước sốt hoặc mì đều rất ngon và hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798588/Food%20Store/China/sui-cao_qqkny1.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Vịt quay Bắc Kinh",
    "price": 350000,
    "description": "Vịt quay Bắc Kinh được biết đến là một trong những món ăn nổi tiếng nhất của vùng đất Bắc Kinh, chinh phục biết bao sự say mê của thực khách, chỉ cần một lần nếm qua thì không sao quên được hương vị nồng nàn của nó. Da vịt quay có màu nâu sậm, mỏng và giòn, lan tỏa một mùi hương nồng nàn hấp dẫn. Để chế biến món vịt quay ngon đúng chuẩn thì người ta phải lựa chọn những con vịt rất kỹ, phải nuôi dân dã để lúc đem quay thịt sẽ có mùi thơm, không bị hôi. Thịt vịt trước khi quay được làm sạch, ướp mạch gia, gia vị giấm đỏ, ngũ vị hương cùng đường, muối rồi nướng trên than hồng. Khi thưởng thức, tùy theo ý thích thì bạn có thể chọn riêng phần da hoặc phần thịt.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798586/Food%20Store/China/vit_quay_bac_kinh_r3shv7.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Đậu phụ Tứ Xuyên",
    "price": 40000,
    "description": "Ẩm thực Tứ Xuyên là một bộ phận cực kỳ quan trọng trong nền ẩm thực Trung Hoa, trong đó không thể không nhắc đến món đậu phụ cay Tứ Xuyên trứ danh, ai cũng đều biết đến. Đây là một món ngon có từ thời nhà Thanh, được chế biến từ các thành phần như đậu phụ non, thịt bằm, sa tế cùng nhiều loại gia vị đặc trưng của Tứ xuyên tạo nên một món ăn độc đáo đặc trưng. Đậu phụ Tứ Xuyên khi ăn có vị cay, nóng đặc biệt, một khi đã nếm qua thì không thể cưỡng lại, dùng để ăn kèm với cơm. Đây không chỉ là một món ăn phổ biến của người Trung Quốc mà còn rất được du khách yêu thích và không thể không nếm thử một khi đã đặt chân đến đây.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798580/Food%20Store/China/dau-phu-tu-xuyen_oolidf.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bò cay Hồ Nam",
    "price": 60000,
    "description": "Cũng là một trong những món cay nổi tiếng nhất của Trung Quốc mà các tín đồ mê món cay không thể bỏ qua là bò cay Hồ Nam. Nguyên liệu chính của món ăn này là thịt bò được xào chung với rau củ, bông cải xanh, hành tây và thêm nước sốt gia vị. Điểm đặc biệt của món ăn này là trước khi chế biến thịt bò, người ta thái mỏng thịt ướp với nước sốt gia truyền thêm một ít tinh bột khoai tây rồi mới bắt lên chảo chiên với lửa nhỏ trong vài phút. Cuối cùng mới đem thịt xào chung với các nguyên liệu khác và trở thành món bò cay vô cùng hấp dẫn, vị cay đặc trưng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798579/Food%20Store/China/bo-cay-ho-nam_ufxxxu.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Tôm xào hạt điều",
    "price": 30000,
    "description": "Một trong những món ăn nổi tiếng làm nên danh tiếng của Trung Hoa mà ai đã một lần thưởng thức đều không thể quên hương vị của nó là món tôm xào hạt điều. Nghe có vẻ đơn giản nhưng không thể không đánh giá cao tài hoa của người đầu bếp Trung Hoa khi đã sáng tạo ra một món tưởng chừng đơn giản lại trở thành một đặc sản hấp dẫn, khác lạ. Thịt tôm dai, ngọt, sóng sánh trong nền của nước sốt màu đỏ xen lẫn vị thơm bùi của hạt đều đã mang đến sự lạ miệng mà ngon không cưỡng. Bên cạnh đó, đây cũng là món ăn được các chuyên gia ẩm thực đánh giá cao vì có thể ngăn ngừa những bệnh liên quan đến tim mạch, tốt cho sức khỏe.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798586/Food%20Store/China/tom-xao-hat-dieu_ofbrwg.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  }, {
    "title": "Mì hoành thánh",
    "price": 35000,
    "description": "Mì hoành thánh không chỉ là một món ăn vô cùng độc đáo của Trung Quốc mà còn được nhiều người yêu thích và đem vào thực đơn hàng ngày cho gia đình. Món ăn là sự kết hợp tinh tế giữa mì và bánh hoành thánh thơm ngon, mang lại cảm giác mới lạ cho món ăn. Tuy nhiên, việc chế biến nên một tô mì hoành thánh ngon không phải là điều dễ dàng, buộc người đầu bếp phải tuân theo những tiêu chuẩn gắt gao. Chẳng hạn, bột bánh tuy mỏng nhưng không bị rách để có thể nhìn thấy rõ nhân bánh bên trong, nước dùng trong vắt, không lợn cợn và đảm bảo độ ngọt vừa miệng. Sợi mì có màu vàng, có độ dai nhưng phải mềm. Đó là tất cả những yếu tố để tạo nên nét hấp dẫn của một tô mì ngon.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798580/Food%20Store/China/mi-hoanh-thanh_izxivy.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sủi cảo",
    "price": 40000,
    "description": "Sủi cảo là một món điểm tâm rất đặc trưng của Trung Quốc, được chế biến bằng phương pháp hấp. Đây là một loại bánh được người dân Trung Quốc làm món ăn chính trong dịp mừng năm mới, một loại bánh cổ truyền giống như bánh chưng của Việt Nam. Món bánh biểu trưng cho sự may mắn, sum họp đầu năm của tất cả thành viên trong gia đình.Bột làm bánh sủi cảo bao gồm hai loại là gạo nếp và gạo tẻ. Về phần nhân bánh, tùy vào sở thích khác nhau của từng người, người ta có thể chế biến nhân bánh từ thịt lợn hoặc thịt bò cùng các loại rau được băm nhuyễn và trộn đều. Bánh có hình bán nguyệt, dùng kèm theo nước sốt hoặc mì đều rất ngon và hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798588/Food%20Store/China/sui-cao_qqkny1.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Lẩu cay Tứ Xuyên",
    "price": 400000,
    "description": "Lẩu cay Tứ Xuyên không chỉ là một món ăn mang thương hiệu Tứ Xuyên mà còn là tinh hoa của lẩu Trung Hoa nói chung. Món lẩu ngon nức mũi, có tiếng gần xa, chỉ cần nhìn thôi đã thấy cảm giác thèm ăn trong lòng, vị thơm, vị ngon và vị cay đọng ngay trên đầu lưỡi thật khó cưỡng. Hai yếu tố quyết định sự thành công của lẩu cay Tứ Xuyên là nước lẩu và nước chấm ăn lẩu.Để nấu được nước lẩu Tứ Xuyên ngon cần trải qua rất nhiều giai đoạn cầu kỳ như xương hầm kết hợp nhiều gia vị khác chỉ có ở vùng đất Tứ Xuyên. Nước lẩu ngon là nước lẩu đã thấm nhuần vị ngọt từ xương, vị chua thanh thao của giấm và vị thật cay vừa ăn vừa xuýt xoa của ớt thì mới đạt được yêu cầu. Thực phẩm ăn kèm với lẩu cũng khá đa dạng bao gồm thịt gà, thịt bò, rau củ tươi ngon. Tất cả đã tạo nên hương vị của món ngon số một Trung Quốc, chinh phục biết bao thực khách sành ăn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798584/Food%20Store/China/lau-cay-tu-xuyen_etl0cs.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm chiên Dương Châu",
    "price": 40000,
    "description": "Trong nền ẩm thực đa dạng của Trung Quốc thì cơm chiên Dương Châu là một món ăn làm nên thương hiệu, ra đời vào những năm dưới triều đại Nhà Thanh. Đây không chỉ là món ăn dễ dàng chế biến mà còn giàu dinh dưỡng, tốt cho sức khỏe nên luôn được các bà nội trợ yêu thích và chế biến cho gia đình. Thành phần chính món ăn bao gồm cơm, trứng, cà rốt và một vào rau củ thái nhỏ. Một đĩa cơm chiên Dương Châu ngon là hạt cơm có màu vàng ươm, bóng bẩy và các nguyên liệu có độ mềm vừa phải. Vì vậy, với mùi hương nức mũi thì đây được đánh giá là một trong những món ngon không thể bỏ qua của đất nước Trung Hoa.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798580/Food%20Store/China/com-chien-duong-chau_zolfaf.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Gà Kung Pao",
    "price": 50000,
    "description": "Gà Kung Pao là một món ăn phổ biến nhất của tỉnh Tứ Xuyên mà còn là món ăn được nhiều người trên thế giới biết đến, một đặc sản có sức chinh phục bao tín đồ sành ăn. Nguyên liệu chính của món ăn là thịt gà kết hợp với đậu phộng và ớt hiểm để tạo nên hương vị đặc trưng khó cưỡng. Món gà Kung Pao ngon đúng điệu thì thịt gà vừa ngọt vừa mềm, đậu phộng béo ngậy bên cạnh vị cay nồng xộc lên cánh mũi của ớt tạo nên nét hấp dẫn và lạ miệng vô cùng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798582/Food%20Store/China/ga-kung-pao_zufcob.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt lợn chua ngọt",
    "price": 60000,
    "description": "Thịt lợn chua ngọt của Trung Quốc không chỉ cực kì nổi tiếng ở Trung Quốc mà còn nổi tiếng trên thế giới. Món thịt lợn chua ngọt xuất hiện nhiều ở Chiết Giang, Tứ Xuyên và Sơn Đông cũng như Quảng Đông của Trung Quốc. Thành phần chính của món thịt lợn chua ngọt là thịt lợn, lòng trắng của trứng và các gia vị như giấm, muối, tinh bột, rau mùi, cà chua và đường. Sau khi được nấu lên, thịt lợn chua ngọt sẽ có màu cam sáng và một hương vị chua ngọt hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798584/Food%20Store/China/thit-lon-chua-ngot_g4agam.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Lẩu cừu",
    "price": 500000,
    "description": "Lẩu cừu là một trong những món ngon trong ẩm thực của Trung Quốc chắc chắn phải kể đến. Món lẩu cừu hảo hạng là một món ăn truyền thống và được dùng vào mỗi dịp lập đông. Nồi nước lẩu được ninh từ xương cừu chính vì vậy chúng có vị đặc biệt thơm ngon và rất ngọt. Thịt cừu thái lát mỏng ăn kèm với các loại rau khác. Thịt cừu có một mùi vị đặc trưng khác hẳn so với các món thịt khác, chính vì vậy mà chắc chắn bạn sẽ cảm thấy rất lạ miệng khi thưởng thức.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798582/Food%20Store/China/lau-cuu_hl8d3p.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Gà ăn mày",
    "price": 250000,
    "description": "Gà ăn mày thực chất chính là món gà nướng đất sét. Sở dĩ có tên gọi đặc biệt như vậy là bởi món ăn này xuất phát từ một câu chuyện được dân gian truyền miệng. Theo nhiều người, từ xưa có một gã ăn mày ăn trộm con gà và bị phát hiện hắn liền bọc gà vào trong lá sen sau đó bọc thêm một lớn bùn bên ngoài và ném vào trong bếp lửa. Chính vì vậy mà từ đó món gà ăn mày được ra đời. Gà được chế biến với những hương vị rất thơm ngon, nhất là khi được bọc bên ngoài một lớp lá sen dày càng làm tăng thêm hương thơm của thịt gà. Tại nhiều nhà hàng món ăn này còn được để nguyên trong đất sét, khi ăn người phục vụ sẽ bắt đầu tách phần đất sét này ra để bạn thưởng thức, vô cùng hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798586/Food%20Store/China/ga-an-may_ijdubp.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm trộn Hàn Quốc Bibimbap",
    "price": 50000,
    "description": "Chắc hẳn không một bạn trẻ nào lại không biết đến món ăn Hàn Quốc quốc dân này. Bibimbap là món cơm trộn kết hợp với nhiều nguyên liệu đầy màu sắc như: màu trắng của cơm, màu vàng của trứng, màu đỏ của kim chi, màu cam của cà rốt, màu đen của rong biển… Tất cả sẽ được trộn đều với nước sốt làm từ ớt trước khi ăn tạo nên một hương vị ngon khó cưỡng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/M%C3%AC_h%E1%BA%A3i_s%E1%BA%A3n_cay_Jjambbong_o1hlet.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Kimbap",
    "price": 30000,
    "description": "Đây được xem là món ăn Hàn Quốc quen thuộc của các tín đồ đam mê ẩm thực Hàn. Nguyên liệu chính của Kimbap là rong biển và cơm trắng, sau đó sẽ thêm rau xào, thịt bò, trứng chiên, xúc xích,... rồi cuộn lại bên trong lá rong biển và cắt thành từng khoanh tròn vừa ăn. Món ăn này trông có vẻ đơn giản nhưng lại bắt miệng đến lạ, đó cũng là lý do khiến Kimbap trở thành một trong  những món ăn đặc trưng của xứ Hàn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140243/Food%20Store/Korean/Kimbap_o4nuh2.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Kim Chi",
    "price": 20000,
    "description": "Nhắc đến Hàn Quốc thì không ai còn xa lạ với món Kim Chi nổi tiếng vang danh khắp thế giới. Cách chế biến kim chi cũng tương đối đơn giản bằng cách lên men cải thảo và ớt, cũng nhờ đó mà các món ăn có sắc đỏ siêu bắt mắt, khiến ai cũng muốn nếm thử ngay từ cái nhìn đầu tiên. Ăn một miếng Kim Chi cay nồng, chua chua ngọt ngọt cùng với cơm nóng thì còn gì bằng nữa đúng không nào? ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140242/Food%20Store/Korean/Kim_Chi_s4zxif.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì lạnh Naengmyeon",
    "price": 50000,
    "description": "Hàn Quốc luôn được xem là thiên đường của các loại mì, trong đó có món mì lạnh Naengmyeon rất khác biệt. Món ăn này được làm từ bột cùng với đó là sự kết hợp của các loại nguyên liệu khác nhau như kiều mạch, khoai tây, khoai lang, tinh bột cây dong và bột sắn dây, trong đó chiếm ưu thế hơn cả sẽ là kiều mạch để làm ra những sợi mì nhỏ dai dai. Chính sự mới lạ của món mì Hàn Quốc này đủ để gây thương nhớ cho những ai lần đầu thưởng thức đấy nhé!",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/M%C3%AC_l%E1%BA%A1nh_Naengmyeon_fprj2s.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Canh bò Seolleongtang",
    "price": 40000,
    "description": "Một món ăn đặc sắc khác của xứ sở Kim Chi đó là canh bò Seolleongtang. Thực tế, đây là bản biến hóa của món canh bún thịt bò bên Hàn Quốc. Nước dùng của Seolleongtang được chế biến từ nước xương bò ninh rất kỹ, cùng với đó là các loại nguyên liệu đi kèm như mì trắng và thịt bò, mang đến hương vị đậm đà, thơm ngon. Nếu bạn muốn trải nghiệm một món ăn Hàn Quốc mới thì đừng ngần ngại với canh bò Seolleongtang nhé! ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140240/Food%20Store/Korean/Canh_b%C3%B2_Seolleongtang_jbmklf.webp",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt bò nướng – Bulgogi",
    "price": 250000,
    "description": "Một món ăn khác mang đậm nét văn hóa xứ Hàn đó là Bulgogi. Xuất hiện xuyên suốt trên màn ảnh Hàn Quốc, Bulgogi dễ dàng thu hút ánh nhìn của người khác nhờ màu sắc bắt mắt, hấp dẫn. Những miếng thịt bò được thái mỏng và tẩm sốt đậu nành, dầu vừng, tỏi, đường, hành xanh, tiêu đen, sau đó đem nướng trên vỉ. Chính những loại gia vị ướp độc đáo này đã làm nên món ăn tuyệt hảo khiến ai nấy đều phát nghiện.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140249/Food%20Store/Korean/Th%E1%BB%8Bt_b%C3%B2_n%C6%B0%E1%BB%9Bng_Bulgogi_ewcq2x.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bánh gạo Tokbokki",
    "price": 30000,
    "description": "Bánh gạo Tokbokki được xem là một món ăn biểu tượng trên đường phố Hàn Quốc,  có mặt ở hầu hết các hàng ăn ngoài các con phố Seoul. Chỉ đơn giản làm từ bột gạo, được nặn thành các thanh dài sau đó nấu chung với bột ớt nhưng lại tạo nên hương vị bạn không thể quên một khi đã thử. Dưới thời tiết se lạnh, ăn những miếng bánh gạo vừa cay nồng, vừa nóng hổi thì còn gì tuyệt vời hơn đúng không nào?",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140238/Food%20Store/Korean/B%C3%A1nh_g%E1%BA%A1o_Tokbokki_zydqda.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Súp đậu phụ kho - Sundubu Jjigae",
    "price": 40000,
    "description": "Nói đến các món ăn Hàn Quốc thì không thể bỏ qua cái tên Sundubu Jjigae - súp đậu phụ hầm cay. Đây được xem là một món ăn lý tưởng trong những ngày thời tiết se lạnh. Món ăn này là sự kết hợp của đậu hũ và rau đi kèm với một chút hải sản và tương ớt hoặc bột ớt hầm lên trong một chiếc nồi sứ, với màu sắc hấp dẫn, nghi ngút khói và tỏa hương ngào ngạt sẽ kích thích vị giác của bạn. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140248/Food%20Store/Korean/S%C3%BAp_%C4%91%E1%BA%ADu_ph%E1%BB%A5_kho_-_Sundubu_Jjigae_flazkv.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Canh đậu tương",
    "price": 20000,
    "description": "Được xem là món canh nổi tiếng nhất Hàn Quốc, canh đậu tương luôn được người Hàn sử dụng trong các bữa ăn hàng ngày. Hương vị của món ăn này được hòa quyện bởi tương đậu, đậu phụ, bí ngòi cùng một số các loại rau củ, nguyên liệu khác. Trong tiết trời se lạnh vừa húp canh đậu tương nóng hổi cay nồng, vừa trò chuyện với gia đình hay bè bạn thì còn gì tuyệt hơn đúng không nào?",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140242/Food%20Store/Korean/Canh_%C4%91%E1%BA%ADu_t%C6%B0%C6%A1ng_pqbckw.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Samgyetang - Canh gà hầm sâm",
    "price": 100000,
    "description": "Samgyetang còn gọi là món canh gà hầm sâm, được chế biến bằng cách hầm cả con gà tơ cùng các nguyên liệu khác như nhân sâm, rễ hedysarum, táo tàu,... Món ăn Hàn Quốc này được xem là lựa chọn lý tưởng nên thưởng thức trong đợt sambok (3 đợt nắng nóng lớn vào mùa hè âm lịch ở Hàn Quốc).",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140242/Food%20Store/Korean/Samgyetang_-_Canh_g%C3%A0_h%E1%BA%A7m_s%C3%A2m_j28hlc.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Canh khoai tây hầm Gamjatang",
    "price": 40000,
    "description": "Canh khoai tây hầm Gamjatang cũng là một món ăn Hàn Quốc truyền thống quen thuộc. Món canh khoai tây hầm gồm có khoai tây, hành lá, hạt tía tô và thịt heo nấu trong nước dùng ninh từ xương heo. Phần lớn các cửa hàng bán Gamjatang đều mở cửa suốt đêm, bởi vì người Hàn Quốc có xu hướng thèm món hầm này vào lúc nửa đêm hay đầu ngày mới. Món ăn được sử dụng như một phương pháp giải rượu hiệu quả. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140238/Food%20Store/Korean/Canh_khoai_t%C3%A2y_h%E1%BA%A7m_Gamjatang_gqxltm.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Hotteok - Bánh Pancake Hàn Quốc",
    "price": 20000,
    "description": "Được biến tấu từ những chiếc bánh pancake phương Tây, bánh rán Hotteok đang là món bánh Hàn Quốc nổi tiếng và được bày bán rộng rãi ở hầu khắp các khu chợ lớn nhỏ. Nguyên liệu chính của bánh là bột nếp được tạo thành những hình tròn nhỏ dẹt. Nhân bánh gồm có đậu phộng, đường nâu, quế, mật ong,... Sau khi được nướng chín, bạn sẽ ngất ngây với lớp vỏ vàng ươm, giòn rụm, nhưng bên trong lại mềm ngọt khó mà cưỡng lại được.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140237/Food%20Store/Korean/Hotteok_upkn9x.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Haemul Pajeon – Bánh kếp hải sản",
    "price": 150000,
    "description": "Một món ăn Hàn Quốc khác hứa hẹn sẽ không làm bạn thất vọng - Haemul Pajeon. Đây là bánh kếp hải sản nên phần nhân bánh sẽ đầy ắp các nguyên liệu đặc trưng như hàu, mực, tôm,... Bánh sau khi đã chiên vàng giòn, phần nhân hải sản đầy đặn, thưởng thức cùng với rượu gạo Makgeolli nữa là đúng chuẩn. Còn gì tuyệt hơn khi ăn món này vào những ngày mưa lạnh lạnh đúng không nào?",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140243/Food%20Store/Korean/Haemul_Pajeon_B%C3%A1nh_k%E1%BA%BFp_h%E1%BA%A3i_s%E1%BA%A3n_ttvptu.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cháo gà DakJuk",
    "price": 30000,
    "description": "Nếu bạn đã nhàm chán với những món ăn Hàn Quốc cay nóng, nhiều dầu mỡ thì hãy thử ngay món cháo gà DakJuk này nhé! Cháo được nấu từ gạo sushi mềm dẻo, thơm ngọt. Thịt gà cùng nhân sâm sẽ được ninh nhừ cùng với hành tây theo công thức rất riêng tạo nên một món ăn thanh đạm, bổ dưỡng, đảm bảo sẽ không làm bạn thất vọng. Nếu có dịp ghé đến xứ sở Kim Chi, đừng quên trải nghiệm món ăn này nhé!",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140237/Food%20Store/Korean/Ch%C3%A1o_g%C3%A0_DakJuk_qzrvxy.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Miến cuộn rong biển chiên giòn",
    "price": 30000,
    "description": "Miến cuộn rong biển chiên giòn là một món ăn Hàn Quốc mới lạ, độc đáo mà bạn nên thử trải nghiệm. Miến sau khi đã nấu chín, trộn chung với dầu mè và nước tương cho vừa ăn, sau đó sẽ được cuộn lại bên trong rong biển và chiên giòn. Đơn giản vậy thôi nhưng lại rất giòn, ngon. Đây cũng chính là món ăn vặt được nhiều bạn trẻ Hàn Quốc ưa chuộng. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140245/Food%20Store/Korean/Mi%E1%BA%BFn_cu%E1%BB%99n_rong_bi%E1%BB%83n_chi%C3%AAn_gi%C3%B2n_axv6wy.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Kongguksu - Mì đậu nành lạnh",
    "price": 30000,
    "description": "Kongguksu là tên một món mì lạnh có phần nước súp được làm từ đậu nành nguyên chất, thích hợp thưởng thức vào mùa hè. Món mì này có vị thanh, đơn giản nhưng vẫn mang theo vị béo của đậu nành. Ngoài ra, trong mì còn có thêm dưa chuột sợi dài, thêm trứng hoặc rắc chút hạt vừng. Đây là một lựa chọn món ăn Hàn Quốc bổ dưỡng mà bạn không nên bỏ qua.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140245/Food%20Store/Korean/Kongguksu_bzqmj5.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Miến trộn Hàn Quốc Japchae",
    "price": 25000,
    "description": "Miến trộn Japchae là món ăn quen thuộc đối với các tín đồ đam mê nền ẩm thực Hàn Quốc. Món miến trộn này khá dễ ăn và cung cấp đủ chất dinh dưỡng bởi các nguyên liệu đa dạng như cà rốt, hành tây, nấm kim châm, hành tây, mộc nhĩ, dưa chuột, trứng gà, thịt thăn bò, cải bó xôi hoặc rau cải ngọt,… Tất cả được hòa quyện với nhau cùng dầu mè và nước tương. Nếu bạn không muốn ăn những món Hàn quá cay thì đây sẽ là lựa chọn bạn không nên bỏ qua.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140251/Food%20Store/Korean/Mi%E1%BA%BFn_tr%E1%BB%99n_H%C3%A0n_Qu%E1%BB%91c_Japchae_wflxoe.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Gopchang lòng nướng",
    "price": 25000,
    "description": "Hàn Quốc nổi tiếng với nhiều món nướng đặc sắc, trong số đó phải kể đến Gopchang lòng nướng. Để ăn món này thì Gopchang (phần thịt lòng) sẽ được cắt thành từng đoạn nhỏ vừa ăn, nướng lên sẽ có độ dai vừa phải, mềm, béo ngậy. Tất nhiên món ngon này rất thích hợp để uống với rượu soju, là món ăn Hàn Quốc quen thuộc trong các bữa tiệc thịt nướng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140241/Food%20Store/Korean/Gopchang_l%C3%B2ng_n%C6%B0%E1%BB%9Bng_bx4eab.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Samgyeopsal",
    "price": 250000,
    "description": "Nhắc đến Hàn Quốc không thể không nhắc đến món Samgyeopsal. Đây là món thịt ba chỉ nướng quốc dân của người dân xứ Hàn. Thịt sẽ không tẩm ướp gia vị gì cả mà nướng thẳng trên bếp. Trong thời gian đợi thịt chín vừa nhâm nhi chút rượu soju, vừa trò chuyện về những tất bật trong cuộc sống với hội bạn thì còn gì bằng. Thịt sau khi chín sẽ được chấm với nước sốt đặc trưng, vị ngọt của thịt hòa quyện cùng sốt cay vô cùng đậm đà.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/Samgyeopsa_guxpxc.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cua ngâm tương",
    "price": 50000,
    "description": "Món cua ngâm tương bắt nguồn từ Hàn Quốc này cũng từng làm mưa làm gió suốt một thời gian dài trong cộng đồng ẩm thực tại việt Nam. Dù có vẻ ngoài bắt mắt, nhưng món ăn này lại khá kén người ăn. Bởi nhiều người sẽ cảm thấy hơi sợ khi nhìn những con cua còn tươi sống với mùi hơi ngai ngái mà chẳng qua một bước chế biến nào. Tuy nhiên, nếu bạn có thể ăn được thì chắc chắn sẽ “ghiền” ngay món này.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140245/Food%20Store/Korean/Cua_ng%C3%A2m_t%C6%B0%C6%A1ng_ipmxxl.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì hải sản cay Jjambbong",
    "price": 40000,
    "description": "Mì hải sản cay Jjambbong là một món ăn Hàn Quốc nổi tiếng trong giới ẩm thực tại Việt Nam bởi độ ngon miệng, vị cay đậm đà khó quên. Thông thường các nguyên liệu chủ yếu của món mì cay này gồm có củ cải trắng, kim chi, xúc xích, xương gà, tôm sú, mực ống, chả cá Hàn Quốc, nấm linh chi Hàn Quốc nấu kèm. Nếu bạn muốn thử thách khả năng ăn cay của mình với thật nhiều cấp độ thì đừng bỏ qua món ăn này nhé!",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/M%C3%AC_h%E1%BA%A3i_s%E1%BA%A3n_cay_Jjambbong_o1hlet.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sushi",
    "price": 25000,
    "description": "Sushi là món ăn kết hợp giữa gạo, giấm và hải sản (mặc dù đôi khi các thành phần khác cũng được sử dụng). Có một loại sushi lên men, được gọi là nare-zushi, nhưng loại sushi tiêu biểu nhất là nigirizushi và temakizushi. Thông thường, mọi người thường liên tưởng đến những miếng cá sống khi nhắc đến món ăn này, tuy nhiên vẫn còn rất nhiều loại khác cho những người không thích đồ sống như tôm luộc hay lươn (biển) nướng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/sushi_d6qrjl.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Tempura",
    "price": 30000,
    "description": "Tempura là một món ăn trong đó hải sản, rau quả tươi và các thành phần khác được nhúng vào bột và bột trứng rồi đem chiên giòn. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/tempura-s645418474_rrqzhb.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sukiyaki",
    "price": 200000,
    "description": "Sukiyaki là một món ăn trong đó thịt và rau được hầm trong nồi sắt. Nước sốt, được gọi là warishita, được làm từ nước tương và đường.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/sukiyaki-s775724272_v42nlk.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì Ramen",
    "price": 25000,
    "description": "Ramen là một món mì được phát triển trở nên vô cùng phổ biến và được coi là món ăn điển hình cho ẩm thực Nhật Bản. Ban đầu, nước mì được làm từ xương gà, nhưng trong những năm gần đây, thịt lợn, thịt bò và hải sản cũng được sử dụng trong món súp, tạo ra một loạt các hương vị đa dạng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/ramen-s1156772548_ria5zm.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm cà ri",
    "price": 30000,
    "description": "Mặc dù cà ri có nguồn gốc từ Ấn Độ, nhưng cà ri chúng ta ăn ở Nhật Bản là một món ăn độc đáo, đã được Nhật Bản hóa dựa trên món cà ri được du nhập từ Anh Quốc. Được chế biến từ thịt và rau (cà rốt, khoai tây, hành tây, v.v.) kết hợp với hương thơm của bột cà ri, sau đó đem hầm, và ăn với cơm.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441905/Food%20Store/Japanese/curryrice-s227377714_pccpvy.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Tonkatsu",
    "price": 30000,
    "description": "Tonkatsu là món ăn gần giống với món thịt lợn cốt lết kiểu phương Tây, trong đó những lát thịt lợn dày được nhúng vào bột và đánh trứng, phủ trong vụn bánh mì và được chiên trong dầu.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/tonkatsu-s664729390_vzq04e.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì Soba",
    "price": 30000,
    "description": "Một món mì làm từ bột kiều mạch ăn với nước tương và nước sốt đường, và có đồ kèm như trứng, tempura,...",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/soba-s1716892303_x3e5va.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì Udon",
    "price": 25000,
    "description": "Một món mì này làm từ bột mì nhào, và ăn với nước sốt làm từ nước tương và đường, tương tự như mì soba.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/hot-udon-s1768735691_nccdgq.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Karaage",
    "price": 35000,
    "description": "Karaage là thịt gà được ướp với nước tương, muối và một số loại gia vị khác nhau, tẩm bột và chiên trong dầu.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441907/Food%20Store/Japanese/karaage-s736494154_x8lfrg.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Yakitori",
    "price": 30000,
    "description": "Yakitori là một món ăn trong đó thịt gà xiên được ướp với nước sốt ngọt hoặc nước tương và đem nướng lên. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441910/Food%20Store/Japanese/yakitori-s561317050_palvpm.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Yakiniku",
    "price": 15000,
    "description": "Yakiniku là một món ăn trong đó thịt bò được ướp với nước sốt, và nướng trực tiếp trên lửa. Độ tươi của thịt rất quan trọng đối với món ăn này. Bằng cách nướng nhẹ, bạn có thể thưởng thức hương vị mềm mại của thịt bò Nhật Bản.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/yakiniku-s696400678_eor4rd.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sashimi",
    "price": 40000,
    "description": "Sashimi là một món ăn truyền thống của Nhật Bản với cá sống được cắt thành miếng nhỏ và ăn kèm với nước tương. Bằng cách thêm gia vị như wasabi hoặc gừng, sashimi sẽ ngon hơn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/sashimi_s1633696672_suadgl.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm Gyudon",
    "price": 30000,
    "description": "Gyudon là món cơm phủ thịt bò, đã trở thành một món ăn phổ biến trên khắp thế giới. Tuy nhiên, món gyudon bạn ăn ở Nhật Bản có thể hơi khác với những món bạn đã thưởng thức ở những nơi khác. Đầu tiên là do chất lượng gạo là khác nhau. Trong các nhà hàng gyudon Nhật Bản, họ chú trọng đến hương vị hài hòa giữa thịt bò và gạo hơn là giá thành của chúng. Ngoài ra, khi thưởng thức bạn cũng có thể đập trứng lên trên món cơm này.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/gyudon-s1087462475_fa5q8g.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Chankonabe",
    "price": 200000,
    "description": "Một món ăn mà thịt và rau rất bổ dưỡng được luộc trong một cái nồi lớn, chankonabe nổi tiếng là món ăn được các đô vật sumo thường xuyên ăn để duy trì trọng lượng cơ thể của họ. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/chankonabe-s699811375_tuflma.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  }
]


module.exports = products;


