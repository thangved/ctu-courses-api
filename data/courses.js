const courses = [
	{
		name: 'Tiếng Anh Nuôi trồng thủy sản 1',
		key: 'AQ101',
	},
	{
		name: 'Tiếng Anh Nuôi trồng thủy sản 2',
		key: 'AQ102',
	},
	{
		name: 'Nhập môn khoa học nghề cá',
		key: 'AQ206',
	},
	{
		name: 'Khoa học môi trường nước',
		key: 'AQ207',
	},
	{
		name: 'Phân loại học đại cương',
		key: 'AQ208',
	},
	{
		name: 'Ao hồ học',
		key: 'AQ209',
	},
	{
		name: 'Sinh thái học đại cương',
		key: 'AQ210',
	},
	{
		name: 'Dinh dưỡng động vật thủy sản',
		key: 'AQ212',
	},
	{
		name: 'Thống kê và phép thí nghiệm',
		key: 'AQ214',
	},
	{
		name: 'Sinh học cá',
		key: 'AQ220',
	},
	{
		name: 'Thiết bị và công trình thủy sản',
		key: 'AQ224',
	},
	{
		name: 'Kỹ thuật nuôi giáp xác và nhuyễn thể',
		key: 'AQ303C',
	},
	{
		name: 'Quản lý trại giống giáp xác và nhuyễn thể',
		key: 'AQ304',
	},
	{
		name: 'Đại cương về bệnh thủy sản và phương pháp chẩn đoán',
		key: 'AQ305',
	},
	{
		name: 'Bệnh thủy sản',
		key: 'AQ306C',
	},
	{
		name: 'Cải tiến di truyền và quản lý nguồn lợi',
		key: 'AQ307',
	},
	{
		name: 'Sinh học và quản lý nguồn lợi thủy sản',
		key: 'AQ308',
	},
	{
		name: 'Kinh tế thủy sản',
		key: 'AQ312C',
	},
	{
		name: 'Luận văn tốt nghiệp - NTTS',
		key: 'AQ401',
	},
	{
		name: 'Sinh học phân tử',
		key: 'BB801C',
	},
	{
		name: 'TT. Sinh học phân tử',
		key: 'BB802C',
	},
	{
		name: 'Sinh hóa 2',
		key: 'BC462C',
	},
	{
		name: 'Sinh học đại cương 2',
		key: 'BS111C',
	},
	{
		name: 'Thực hành sinh học đại cương 2',
		key: 'BS211C',
	},
	{
		name: 'Thực tập nhận thức',
		key: 'BT200C',
	},
	{
		name: 'Vật lý',
		key: 'BT214',
	},
	{
		name: 'TT. Vật lý',
		key: 'BT215',
	},
	{
		name: 'Công nghệ sinh học căn bản',
		key: 'BT216',
	},
	{
		name: 'Công nghệ sinh học vi sinh vật',
		key: 'BT221',
	},
	{
		name: 'Hóa học hữu cơ',
		key: 'BT228',
	},
	{
		name: 'Thực hành Hóa học hữu cơ',
		key: 'BT229',
	},
	{
		name: 'Thực hành Sinh hóa 2',
		key: 'BT231',
	},
	{
		name: 'Chuyên đề công nghệ sinh học 4',
		key: 'BT298C',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học',
		key: 'BT300C',
	},
	{
		name: 'Khía cạnh kinh tế xã hội của công nghệ sinh học',
		key: 'BT307C',
	},
	{
		name: 'Thực tập cơ sở sản xuất',
		key: 'BT480C',
	},
	{
		name: 'Luận văn tốt nghiệp',
		key: 'BT499C',
	},
	{
		name: 'Khí tượng thủy văn',
		key: 'CN004',
	},
	{
		name: 'Kỹ thuật cơ khí đại cương',
		key: 'CN008',
	},
	{
		name: 'Cơ khí nông nghiệp đại cương',
		key: 'CN097',
	},
	{
		name: 'Nhập môn kỹ thuật',
		key: 'CN100',
	},
	{
		name: 'Cơ lý thuyết',
		key: 'CN101',
	},
	{
		name: 'Địa chất công trình',
		key: 'CN102',
	},
	{
		name: 'Vật liệu xây dựng',
		key: 'CN104',
	},
	{
		name: 'TT. Vật liệu xây dựng',
		key: 'CN105',
	},
	{
		name: 'Sức bền vật liệu - XD',
		key: 'CN106',
	},
	{
		name: 'Vật liệu Composite - CNHH',
		key: 'CN107',
	},
	{
		name: 'Cơ học lưu chất',
		key: 'CN108',
	},
	{
		name: 'Trắc địa',
		key: 'CN110',
	},
	{
		name: 'TT. Trắc địa',
		key: 'CN111',
	},
	{
		name: 'TT. Cơ học đất',
		key: 'CN113',
	},
	{
		name: 'Kỹ thuật điện - XD',
		key: 'CN116',
	},
	{
		name: 'Phương pháp tính - Kỹ thuật',
		key: 'CN117',
	},
	{
		name: 'Nguyên lý quy hoạch',
		key: 'CN119',
	},
	{
		name: 'Bản đồ học và GIS',
		key: 'CN122',
	},
	{
		name: 'Kết cấu bê-tông cơ sở',
		key: 'CN123',
	},
	{
		name: 'Thủy lực công trình',
		key: 'CN124',
	},
	{
		name: 'Anh văn chuyên môn xây dựng',
		key: 'CN126',
	},
	{
		name: 'Nền móng cơ sở',
		key: 'CN127',
	},
	{
		name: 'Kỹ thuật điện',
		key: 'CN128',
	},
	{
		name: 'Kỹ thuật điện tử - CN',
		key: 'CN129',
	},
	{
		name: 'Hình hoạ và vẽ kỹ thuật - XD',
		key: 'CN131',
	},
	{
		name: 'Hình họa và vẽ kỹ thuật - CK',
		key: 'CN132',
	},
	{
		name: 'Vận trù học',
		key: 'CN135',
	},
	{
		name: 'Cơ lý thuyết - CK',
		key: 'CN136',
	},
	{
		name: 'Sức bền vật liệu - CK',
		key: 'CN137',
	},
	{
		name: 'Dung sai và kỹ thuật đo',
		key: 'CN138',
	},
	{
		name: 'Nhiệt động lực học và truyền nhiệt',
		key: 'CN139',
	},
	{
		name: 'Cơ học máy',
		key: 'CN142',
	},
	{
		name: 'Cơ sở thiết kế máy',
		key: 'CN145',
	},
	{
		name: 'Vật liệu cơ khí và nhiệt luyện',
		key: 'CN147',
	},
	{
		name: 'Thiết kế kỹ thuật',
		key: 'CN148',
	},
	{
		name: 'Truyền động thủy lực và khí nén',
		key: 'CN149',
	},
	{
		name: 'Kỹ thuật số',
		key: 'CN151',
	},
	{
		name: 'Phương pháp thí nghiệm và xử lý số liệu',
		key: 'CN152',
	},
	{
		name: 'Bơm, quạt và máy nén',
		key: 'CN153',
	},
	{
		name: 'Cơ học kết cấu',
		key: 'CN154',
	},
	{
		name: 'Khoa học về an toàn và bảo hộ lao động',
		key: 'CN155',
	},
	{
		name: 'Anh văn chuyên môn Cơ khí',
		key: 'CN156',
	},
	{
		name: 'Anh văn chuyên môn Quản lý công nghiệp',
		key: 'CN157',
	},
	{
		name: 'Anh văn chuyên môn - Kỹ thuật điện',
		key: 'CN158',
	},
	{
		name: 'Anh văn chuyên môn - Cơ điện tử',
		key: 'CN159',
	},
	{
		name: 'TT. Công nghệ kim loại cơ bản',
		key: 'CN162',
	},
	{
		name: 'Anh văn chuyên môn Công nghệ hóa học',
		key: 'CN166',
	},
	{
		name: 'TT. Mạch điện',
		key: 'CN169',
	},
	{
		name: 'An toàn điện',
		key: 'CN177',
	},
	{
		name: 'TT. Vật liệu xây dựng - CĐ',
		key: 'CN179',
	},
	{
		name: 'Cơ học lưu chất - CK',
		key: 'CN189',
	},
	{
		name: 'Đồ án kiến trúc',
		key: 'CN194',
	},
	{
		name: 'Đồ án cơ sở thiết kế máy',
		key: 'CN195',
	},
	{
		name: 'Đồ án thiết kế và chế tạo sản phẩm CNHH',
		key: 'CN197',
	},
	{
		name: 'Điều khiển quá trình - CNHH',
		key: 'CN198',
	},
	{
		name: 'Hóa học và hóa lý polymer',
		key: 'CN199',
	},
	{
		name: 'Quản lý dự án công nghiệp',
		key: 'CN201',
	},
	{
		name: 'Kỹ thuật dự báo trong công nghiệp',
		key: 'CN203',
	},
	{
		name: 'Quản lý kỹ thuật và công nghệ',
		key: 'CN204',
	},
	{
		name: 'Thiết kế vị trí và mặt bằng HTCN',
		key: 'CN206',
	},
	{
		name: 'Vận trù học 1 - QLCN',
		key: 'CN208',
	},
	{
		name: 'Vận trù học 2 - QLCN',
		key: 'CN209',
	},
	{
		name: 'Kiểm soát chất lượng',
		key: 'CN210',
	},
	{
		name: 'Tin học ứng dụng - QLCN',
		key: 'CN211',
	},
	{
		name: 'Kỹ thuật hệ thống',
		key: 'CN212',
	},
	{
		name: 'Mô hình hóa và mô phỏng HTCN',
		key: 'CN218',
	},
	{
		name: 'Thực tập ngành nghề - QLCN',
		key: 'CN220',
	},
	{
		name: 'Kỹ thuật ra quyết định',
		key: 'CN222',
	},
	{
		name: 'Tiểu luận tốt nghiệp - QLCN',
		key: 'CN225',
	},
	{
		name: 'Luận văn tốt nghiệp - QLCN',
		key: 'CN226',
	},
	{
		name: 'Kỹ thuật môi trường',
		key: 'CN230',
	},
	{
		name: 'Kỹ thuật phản Ứng',
		key: 'CN231',
	},
	{
		name: 'Thiết bị cơ lưu chất và cơ vật liệu rời',
		key: 'CN232',
	},
	{
		name: 'TT. Quá trình và thiết bị CNHH',
		key: 'CN233',
	},
	{
		name: 'Kỹ thuật xúc tác',
		key: 'CN236',
	},
	{
		name: 'Tổng hợp hữu cơ hóa dầu',
		key: 'CN238',
	},
	{
		name: 'Công nghệ các chất hoạt động bề mặt',
		key: 'CN239',
	},
	{
		name: 'Thực tập ngành nghề - CNHH',
		key: 'CN240',
	},
	{
		name: 'Hóa học và hóa lý Polymer',
		key: 'CN241',
	},
	{
		name: 'Kỹ thuật sản xuất chất dẻo',
		key: 'CN242',
	},
	{
		name: 'Kỹ thuật chế biến cao su',
		key: 'CN243',
	},
	{
		name: 'Kỹ thuật gia công polymer',
		key: 'CN244',
	},
	{
		name: 'Hóa học chất kích thích và BVTV',
		key: 'CN247',
	},
	{
		name: 'Kỹ thuật sản xuất bột cellulose và giấy',
		key: 'CN248',
	},
	{
		name: 'Công nghệ sản xuất các hợp chất vô cơ',
		key: 'CN249',
	},
	{
		name: 'Kỹ thuật sản xuất chất kết dính',
		key: 'CN251',
	},
	{
		name: 'Dụng cụ đo',
		key: 'CN255',
	},
	{
		name: 'Công nghệ điện hóa',
		key: 'CN259',
	},
	{
		name: 'Tiểu luận tốt nghiệp -CNHH',
		key: 'CN261',
	},
	{
		name: 'Luận văn tốt nghiệp - CNHH',
		key: 'CN262',
	},
	{
		name: 'Kỹ thuật cao Áp',
		key: 'CN263',
	},
	{
		name: 'Hệ thống điện 2',
		key: 'CN265',
	},
	{
		name: 'Tin học ứng dụng - kỹ thuật điện',
		key: 'CN271',
	},
	{
		name: 'Khí cụ điện',
		key: 'CN272',
	},
	{
		name: 'Kỹ thuật chiếu sáng',
		key: 'CN273',
	},
	{
		name: 'Cung cấp điện',
		key: 'CN274',
	},
	{
		name: 'Nhà máy điện',
		key: 'CN275',
	},
	{
		name: 'Vận hành và điều khiển hệ thống điện',
		key: 'CN277',
	},
	{
		name: 'Thiết kế hệ thống điện',
		key: 'CN279',
	},
	{
		name: 'Đánh giá độ tin cậy của hệ thống điện',
		key: 'CN284',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KT Điện',
		key: 'CN285',
	},
	{
		name: 'Luận văn tốt nghiệp - KT. Điện',
		key: 'CN286',
	},
	{
		name: 'TT. Ngành nghề cơ điện tử',
		key: 'CN295',
	},
	{
		name: 'Mạng công nghiệp và truyền thông',
		key: 'CN298',
	},
	{
		name: 'Nhiên liệu sinh học và nhiên liệu tái tạo',
		key: 'CN300',
	},
	{
		name: 'Thủy văn công trình',
		key: 'CN301',
	},
	{
		name: 'Kết cấu thép',
		key: 'CN305',
	},
	{
		name: 'Cấp thoát nước',
		key: 'CN307',
	},
	{
		name: 'Máy xây dựng và kỹ thuật thi công',
		key: 'CN311',
	},
	{
		name: 'Công trình giao thông',
		key: 'CN314',
	},
	{
		name: 'Thủy công',
		key: 'CN315',
	},
	{
		name: 'Thực tập ngành nghề - TC',
		key: 'CN320',
	},
	{
		name: 'Thí nghiệm công trình',
		key: 'CN321',
	},
	{
		name: 'Cấu kiện bê-tông đặc biệt',
		key: 'CN322',
	},
	{
		name: 'Quản lý công trình thủy',
		key: 'CN327',
	},
	{
		name: 'Kết cấu thép nhà công nghiệp',
		key: 'CN328',
	},
	{
		name: 'Tin học ứng dụng - Kỹ thuật 1',
		key: 'CN331',
	},
	{
		name: 'Tin học ứng dụng - Kỹ thuật 2',
		key: 'CN332',
	},
	{
		name: 'Hóa học chất rắn',
		key: 'CN333',
	},
	{
		name: 'Quy hoạch đô thị',
		key: 'CN335',
	},
	{
		name: 'Luật xây dựng',
		key: 'CN337',
	},
	{
		name: 'Tiểu luận tốt nghiệp - TC',
		key: 'CN338',
	},
	{
		name: 'Luận văn tốt nghiệp - TC',
		key: 'CN339',
	},
	{
		name: 'Quản lý sản xuất công nghiệp',
		key: 'CN340',
	},
	{
		name: 'Matlab và Labview',
		key: 'CN341',
	},
	{
		name: 'Đàn hồi ứng dụng và phương pháp phần tử hữu hạn',
		key: 'CN343',
	},
	{
		name: 'Bệnh học công trình',
		key: 'CN344',
	},
	{
		name: 'Giải pháp nền móng hợp lý',
		key: 'CN346',
	},
	{
		name: 'Nhà nhiều tầng',
		key: 'CN347',
	},
	{
		name: 'Tin học trong quản lý dự Án xây dựng',
		key: 'CN348',
	},
	{
		name: 'Kết cấu bê-tông công trình dân dụng',
		key: 'CN349',
	},
	{
		name: 'Tiểu luận tốt nghiệp - XDDD',
		key: 'CN357',
	},
	{
		name: 'Luận văn tốt nghiệp - XDDD',
		key: 'CN358',
	},
	{
		name: 'Thi công cầu',
		key: 'CN366',
	},
	{
		name: 'Thí nghiệm đường ô tô',
		key: 'CN371',
	},
	{
		name: 'Cấu tạo động cơ đốt trong',
		key: 'CN379',
	},
	{
		name: 'Tiểu luận tốt nghiệp - XDCĐ',
		key: 'CN383',
	},
	{
		name: 'Luận văn tốt nghiệp - XDCĐ',
		key: 'CN384',
	},
	{
		name: 'Ăn mòn kim loại',
		key: 'CN385',
	},
	{
		name: 'Công nghệ chế tạo máy 1',
		key: 'CN387',
	},
	{
		name: 'Công nghệ chế tạo máy 2',
		key: 'CN388',
	},
	{
		name: 'TT. Công nghệ kim loại cơ bản',
		key: 'CN389',
	},
	{
		name: 'Công nghệ và thiết bị tạo phôi',
		key: 'CN390',
	},
	{
		name: 'Công nghệ chế tạo khuôn mẫu',
		key: 'CN391',
	},
	{
		name: 'CAD, CAM, CNC',
		key: 'CN392',
	},
	{
		name: 'Các phương pháp gia công đặc biệt',
		key: 'CN393',
	},
	{
		name: 'Tự động hóa sản xuất công nghiệp',
		key: 'CN394',
	},
	{
		name: 'TT. Công nghệ kim loại - CTM',
		key: 'CN395',
	},
	{
		name: 'Thực tập ngành nghề cơ khí chế tạo máy',
		key: 'CN398',
	},
	{
		name: 'Trang bị điện trong máy công nghiệp',
		key: 'CN399',
	},
	{
		name: 'Dao động cơ học',
		key: 'CN401',
	},
	{
		name: 'Quá trình và thiết bị công nghiệp',
		key: 'CN403',
	},
	{
		name: 'Vật liệu phi kim loại',
		key: 'CN405',
	},
	{
		name: 'PLC',
		key: 'CN406',
	},
	{
		name: 'Quy hoạch công nghiệp',
		key: 'CN407',
	},
	{
		name: 'Quản lý sản xuất công nghiệp',
		key: 'CN408',
	},
	{
		name: 'Thiết kế dụng cụ cắt',
		key: 'CN411',
	},
	{
		name: 'Tạo mẫu nhanh',
		key: 'CN413',
	},
	{
		name: 'Quản lý kỹ thuật bảo trì công nghiệp',
		key: 'CN414',
	},
	{
		name: 'Thiết kế hệ thống cơ điện tử',
		key: 'CN416',
	},
	{
		name: 'Công nghệ sản xuất sạch',
		key: 'CN419',
	},
	{
		name: 'Công nghệ phục hồi chi tiết máy',
		key: 'CN420',
	},
	{
		name: 'Tiểu luận tốt nghiệp - CKCTM',
		key: 'CN423',
	},
	{
		name: 'Luận văn tốt nghiệp - CKCTM',
		key: 'CN424',
	},
	{
		name: 'Vật liệu và công nghệ kim loại',
		key: 'CN425',
	},
	{
		name: 'TT. Máy và thiết bị chế biến thực phẩm',
		key: 'CN427',
	},
	{
		name: 'TT. Máy và thiết bị chế biến lương thực',
		key: 'CN429',
	},
	{
		name: 'Điện công nghiệp',
		key: 'CN442',
	},
	{
		name: 'Máy thu hoạch',
		key: 'CN448',
	},
	{
		name: 'Luận văn tốt nghiệp - CKCB',
		key: 'CN451',
	},
	{
		name: 'Trang bị điện và điện tử trên ô tô - máy kéo',
		key: 'CN457',
	},
	{
		name: 'Khảo nghiệm và kiểm định ô tô',
		key: 'CN463',
	},
	{
		name: 'Kỹ thuật sử dụng và khai thác ôtô',
		key: 'CN467',
	},
	{
		name: 'Công nghệ lắp ráp ô tô',
		key: 'CN472',
	},
	{
		name: 'Kỹ thuật nâng chuyển',
		key: 'CN473',
	},
	{
		name: 'Luận văn tốt nghiệp',
		key: 'CN475',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Cơ điện tử',
		key: 'CN476',
	},
	{
		name: 'Luận văn tốt nghiệp - Cơ điện tử',
		key: 'CN477',
	},
	{
		name: 'Máy công cụ',
		key: 'CN482',
	},
	{
		name: 'Thực tập ngành nghề - CKGT',
		key: 'CN487',
	},
	{
		name: 'Tin học ứng dụng - CNHH',
		key: 'CN488',
	},
	{
		name: 'Cơ sở thiết kế máy và thiết bị hóa học',
		key: 'CN489',
	},
	{
		name: 'Đồ án chuyên ngành - CNHH',
		key: 'CN490',
	},
	{
		name: 'Đồ án quá trình và thiết bị CNHH',
		key: 'CN491',
	},
	{
		name: 'Công nghệ hóa hương liệu',
		key: 'CN494',
	},
	{
		name: 'Công nghệ hóa mỹ phẩm',
		key: 'CN495',
	},
	{
		name: 'Kỹ thuật sản xuất vật liệu Silicat',
		key: 'CN497',
	},
	{
		name: 'Cơ học ứng dụng',
		key: 'CN500',
	},
	{
		name: 'Tổ chức thi công - CĐ',
		key: 'CN505',
	},
	{
		name: 'Báo cáo chuyên đề - XD',
		key: 'CN507',
	},
	{
		name: 'Đồ án kết cấu bê-tông - TC',
		key: 'CN508',
	},
	{
		name: 'Đồ án thủy lực công trình',
		key: 'CN509',
	},
	{
		name: 'Đồ án nền móng công trình',
		key: 'CN510',
	},
	{
		name: 'Đồ án thi công công trình thủy lợi',
		key: 'CN511',
	},
	{
		name: 'Đồ án thủy công',
		key: 'CN512',
	},
	{
		name: 'Quản lý dự án xây dựng',
		key: 'CN514',
	},
	{
		name: 'Đồ án cấp thoát nước',
		key: 'CN515',
	},
	{
		name: 'Đồ án thiết kế hệ thống cơ điện tử',
		key: 'CN516',
	},
	{
		name: 'Đồ án hệ thống điện',
		key: 'CN518',
	},
	{
		name: 'Báo cáo chuyên đề Kỹ thuật điện',
		key: 'CN520',
	},
	{
		name: 'Đồ án kết cấu bê-tông',
		key: 'CN521',
	},
	{
		name: 'Đồ án kết cấu thép',
		key: 'CN522',
	},
	{
		name: 'Đồ án thi công',
		key: 'CN523',
	},
	{
		name: 'Thực tập ngành nghề - XDDD',
		key: 'CN524',
	},
	{
		name: 'Đồ án quản lý dự án công nghiệp',
		key: 'CN525',
	},
	{
		name: 'Đồ án thiết kế vị trí và mặt bằng',
		key: 'CN526',
	},
	{
		name: 'Đồ án quản lý kỹ thuật bảo trì công nghiệp',
		key: 'CN527',
	},
	{
		name: 'Đồ án mô hình hóa và mô phỏng các hệ thống công nghiệp',
		key: 'CN528',
	},
	{
		name: 'Đồ án công nghệ chế tạo máy',
		key: 'CN529',
	},
	{
		name: 'Thi công đường',
		key: 'CN532',
	},
	{
		name: 'Đồ án nền móng công trình - CĐ',
		key: 'CN534',
	},
	{
		name: 'Đồ án thi công cầu',
		key: 'CN537',
	},
	{
		name: 'Đồ án thi công đường',
		key: 'CN538',
	},
	{
		name: 'Thực tập ngành nghề - CĐ',
		key: 'CN539',
	},
	{
		name: 'Đồ án ô tô',
		key: 'CN541',
	},
	{
		name: 'Kinh tế kỹ thuật',
		key: 'CN542',
	},
	{
		name: 'Quản trị nguồn nhân lực',
		key: 'CN543',
	},
	{
		name: 'Đồ án cơ học máy',
		key: 'CN544',
	},
	{
		name: 'Quản lý chất lượng tổng thể',
		key: 'CN545',
	},
	{
		name: 'Sản xuất tinh gọn',
		key: 'CN546',
	},
	{
		name: 'Tin học ứng dụng nâng cao - QLCN',
		key: 'CN547',
	},
	{
		name: 'Đo lường và thiết kế công việc',
		key: 'CN548',
	},
	{
		name: 'Quản lý vật tư - tồn kho',
		key: 'CN549',
	},
	{
		name: 'Quản lý chuỗi cung Ứng và hậu cần',
		key: 'CN550',
	},
	{
		name: 'Kỹ thuật điều độ trong sản xuất và dịch vụ',
		key: 'CN551',
	},
	{
		name: 'Phương pháp nghiên cứu và viết báo cáo khoa học',
		key: 'CN552',
	},
	{
		name: 'Hệ thống máy và thiết bị lạnh',
		key: 'CN555',
	},
	{
		name: 'Truyền khối - CNHH',
		key: 'CN561',
	},
	{
		name: 'Hóa lý: Động học và điện hóa học',
		key: 'CN562',
	},
	{
		name: 'Thiết kế và phân tích thí nghiệm',
		key: 'CN563',
	},
	{
		name: 'Các phương pháp phân tích hiện đại-CNHH',
		key: 'CN564',
	},
	{
		name: 'TT. Các phương pháp phân tích hiện đại-CNHH',
		key: 'CN565',
	},
	{
		name: 'Lý thuyết ô tô',
		key: 'CN566',
	},
	{
		name: 'Cấu tạo ô tô máy kéo',
		key: 'CN567',
	},
	{
		name: 'Lý thuyết tính toán và thiết kế động cơ đốt trong',
		key: 'CN568',
	},
	{
		name: 'Đồ án thiết kế động cơ đốt trong',
		key: 'CN569',
	},
	{
		name: 'Kỹ thuật sửa chữa máy',
		key: 'CN570',
	},
	{
		name: 'Thiết kế ô tô',
		key: 'CN571',
	},
	{
		name: 'Thực tập trang bị điện, điện tử trên ô tô - máy kéo',
		key: 'CN572',
	},
	{
		name: 'Thực tập sửa chữa động cơ',
		key: 'CN573',
	},
	{
		name: 'Thực tập sửa chữa ô tô',
		key: 'CN574',
	},
	{
		name: 'Điều khiển logic có thể lập trình (PLC)',
		key: 'CN579',
	},
	{
		name: 'Lý thuyết điều khiển hiện đại',
		key: 'CN580',
	},
	{
		name: 'Kỹ thuật vi điều khiển',
		key: 'CN581',
	},
	{
		name: 'Cơ cấu chấp hành cơ điện tử',
		key: 'CN582',
	},
	{
		name: 'Sinh học phân tử',
		key: 'CS102',
	},
	{
		name: 'TT. Sinh học phân tử',
		key: 'CS103',
	},
	{
		name: 'Vi sinh học công nghiệp',
		key: 'CS104',
	},
	{
		name: 'TT. Vi sinh học công nghiệp',
		key: 'CS105',
	},
	{
		name: 'Vi sinh học môi trường',
		key: 'CS106',
	},
	{
		name: 'TT. Vi sinh học môi trường',
		key: 'CS107',
	},
	{
		name: 'Virus học đại cương',
		key: 'CS108',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - CNSH',
		key: 'CS109',
	},
	{
		name: 'Anh văn chuyên ngành - CNSH',
		key: 'CS110',
	},
	{
		name: 'Vi sinh học đại cương',
		key: 'CS112',
	},
	{
		name: 'TT. Vi sinh học đại cương',
		key: 'CS113',
	},
	{
		name: 'Sinh hóa',
		key: 'CS114',
	},
	{
		name: 'TT. Sinh hóa',
		key: 'CS115',
	},
	{
		name: 'Phương pháp phân tích vi sinh vật',
		key: 'CS118',
	},
	{
		name: 'TT. Phương pháp phân tích vi sinh vật',
		key: 'CS119',
	},
	{
		name: 'Cơ sở di truyền học',
		key: 'CS124',
	},
	{
		name: 'TT. Cơ sở di truyền học',
		key: 'CS125',
	},
	{
		name: 'Kỹ thuật phân tích và thiết bị',
		key: 'CS126',
	},
	{
		name: 'TT. Kỹ thuật phân tích và thiết bị',
		key: 'CS127',
	},
	{
		name: 'TT. Công nghệ di truyền',
		key: 'CS211',
	},
	{
		name: 'Nhập môn công nghệ sinh học',
		key: 'CS302',
	},
	{
		name: 'An toàn trong thực phẩm và môi trường',
		key: 'CS303',
	},
	{
		name: 'Thực tế cơ sở - CNSH',
		key: 'CS304',
	},
	{
		name: 'Protein và Enzim học',
		key: 'CS311',
	},
	{
		name: 'TT. Protein và Enzim học',
		key: 'CS312',
	},
	{
		name: 'Tin sinh học',
		key: 'CS313',
	},
	{
		name: 'Công nghệ sinh học trong chọn giống thực vật',
		key: 'CS314',
	},
	{
		name: 'Nấm học',
		key: 'CS316',
	},
	{
		name: 'TT. Nấm học',
		key: 'CS317',
	},
	{
		name: 'Lên men thực phẩm',
		key: 'CS318',
	},
	{
		name: 'TT. Lên men thực phẩm',
		key: 'CS319',
	},
	{
		name: 'Công nghệ di truyền',
		key: 'CS320',
	},
	{
		name: 'Tiểu luận tốt nghiệp - CNSH',
		key: 'CS322',
	},
	{
		name: 'Luận văn tốt nghiệp - CNSH',
		key: 'CS323',
	},
	{
		name: 'Vi sinh trong an toàn thực phẩm',
		key: 'CS325',
	},
	{
		name: 'Báo cáo chuyên đề công nghệ sinh học',
		key: 'CS326',
	},
	{
		name: 'Nuôi cấy mô tế bào thực vật và động vật',
		key: 'CS327',
	},
	{
		name: 'TT. Nuôi cấy mô tế bào thực vật và động vật',
		key: 'CS328',
	},
	{
		name: 'Công nghệ sinh học thực phẩm',
		key: 'CS329',
	},
	{
		name: 'Luận văn tốt nghiệp - VSV',
		key: 'CS341',
	},
	{
		name: 'Protein học',
		key: 'CS342',
	},
	{
		name: 'Chất điều hòa sinh trưởng thực vật',
		key: 'CS343',
	},
	{
		name: 'Công nghệ sinh học trong y dược',
		key: 'CS344',
	},
	{
		name: 'Vi sinh vật nông nghiệp',
		key: 'CS345',
	},
	{
		name: 'Công nghệ sinh học trong thủy sản',
		key: 'CS346',
	},
	{
		name: 'Sinh thái Vi sinh vật',
		key: 'CS347',
	},
	{
		name: 'Thống kê sinh học',
		key: 'CS464C',
	},
	{
		name: 'Đại số tuyến tính và hình học',
		key: 'CT052H',
	},
	{
		name: 'Xác suất thống kê',
		key: 'CT053H',
	},
	{
		name: 'Kỹ năng làm việc nhóm',
		key: 'CT057H',
	},
	{
		name: 'Kỹ năng học đại học',
		key: 'CT100',
	},
	{
		name: 'Lập trình căn bản A',
		key: 'CT101',
	},
	{
		name: 'Toán cho khoa học máy tính',
		key: 'CT101H',
	},
	{
		name: 'Cấu trúc dữ liệu',
		key: 'CT102H',
	},
	{
		name: 'Cấu trúc dữ liệu',
		key: 'CT103',
	},
	{
		name: 'Nền tảng công nghệ thông tin',
		key: 'CT103H',
	},
	{
		name: 'Kiến trúc máy tính - Điện tử',
		key: 'CT105',
	},
	{
		name: 'Mạng máy tính',
		key: 'CT106H',
	},
	{
		name: 'Phân tích và thiết kế hệ thống thông tin',
		key: 'CT109',
	},
	{
		name: 'Kỹ năng học đại học',
		key: 'CT111H',
	},
	{
		name: 'Mạng máy tính',
		key: 'CT112',
	},
	{
		name: 'Nhập môn công nghệ phần mềm',
		key: 'CT113',
	},
	{
		name: 'Tin học lý thuyết',
		key: 'CT121',
	},
	{
		name: 'Phương pháp tính - CNTT',
		key: 'CT124',
	},
	{
		name: 'Lý thuyết xếp hàng',
		key: 'CT126',
	},
	{
		name: 'Lý thuyết thông tin',
		key: 'CT127',
	},
	{
		name: 'Lập trình căn bản - Điện tử',
		key: 'CT131',
	},
	{
		name: 'Linh kiện điện tử',
		key: 'CT132',
	},
	{
		name: 'Mạch tương tự',
		key: 'CT134',
	},
	{
		name: 'TT. Mạch tương tự',
		key: 'CT135',
	},
	{
		name: 'Mạch số',
		key: 'CT136',
	},
	{
		name: 'Toán kỹ thuật',
		key: 'CT138',
	},
	{
		name: 'Lý thuyết tín hiệu và hệ thống',
		key: 'CT140',
	},
	{
		name: 'Kỹ thuật vi xử lý',
		key: 'CT141',
	},
	{
		name: 'Lập trình hệ thống',
		key: 'CT143',
	},
	{
		name: 'Xử lý tín hiệu số',
		key: 'CT144',
	},
	{
		name: 'TT. Xử lý tín hiệu số',
		key: 'CT145',
	},
	{
		name: 'Truyền dữ liệu',
		key: 'CT146',
	},
	{
		name: 'TT. Truyền dữ liệu',
		key: 'CT147',
	},
	{
		name: 'Lý thuyết mạch',
		key: 'CT148',
	},
	{
		name: 'TT. Kỹ thuật vi xử lý',
		key: 'CT164',
	},
	{
		name: 'TT. Mạch số',
		key: 'CT168',
	},
	{
		name: 'Nhập môn công nghệ phần mềm',
		key: 'CT171',
	},
	{
		name: 'Toán rời rạc',
		key: 'CT172',
	},
	{
		name: 'Kiến trúc máy tính',
		key: 'CT173',
	},
	{
		name: 'Phân tích và thiết kế thuật toán',
		key: 'CT174',
	},
	{
		name: 'Lý thuyết đồ thị',
		key: 'CT175',
	},
	{
		name: 'Lập trình hướng đối tượng',
		key: 'CT176',
	},
	{
		name: 'Cấu trúc dữ liệu',
		key: 'CT177',
	},
	{
		name: 'Nguyên lý hệ điều hành',
		key: 'CT178',
	},
	{
		name: 'Quản trị hệ thống',
		key: 'CT179',
	},
	{
		name: 'Cơ sở dữ liệu',
		key: 'CT180',
	},
	{
		name: 'Hệ thống thông tin doanh nghiệp',
		key: 'CT181',
	},
	{
		name: 'Ngôn ngữ mô hình hóa',
		key: 'CT182',
	},
	{
		name: 'Anh văn chuyên môn công nghệ thông tin 1',
		key: 'CT183',
	},
	{
		name: 'Anh văn chuyên môn công nghệ thông tin 2',
		key: 'CT184',
	},
	{
		name: 'Nhập môn lập trình Web',
		key: 'CT188',
	},
	{
		name: 'Nhập môn trí tuệ nhân tạo',
		key: 'CT190',
	},
	{
		name: 'Quy hoạch tuyến tính',
		key: 'CT199',
	},
	{
		name: 'Nền tảng công nghệ thông tin',
		key: 'CT200',
	},
	{
		name: 'Niên luận cơ sở ngành Khoa học máy tính',
		key: 'CT201',
	},
	{
		name: 'An ninh máy tính',
		key: 'CT201H',
	},
	{
		name: 'Nguyên lý máy học',
		key: 'CT202',
	},
	{
		name: 'Đồ họa máy tính',
		key: 'CT203',
	},
	{
		name: 'An toàn và bảo mật thông tin',
		key: 'CT204',
	},
	{
		name: 'Quản trị cơ sở dữ liệu',
		key: 'CT205',
	},
	{
		name: 'Nguyên lý hệ quản trị cơ sở dữ liệu',
		key: 'CT206H',
	},
	{
		name: 'Phát triển phần mềm mã nguồn mở',
		key: 'CT207',
	},
	{
		name: 'Niên luận ngành Khoa học máy tính',
		key: 'CT208',
	},
	{
		name: 'Hệ quản trị cơ sở dữ liệu Oracle',
		key: 'CT208H',
	},
	{
		name: 'Đồ họa nâng cao',
		key: 'CT209',
	},
	{
		name: 'Quản trị mạng trên MS Windows',
		key: 'CT209H',
	},
	{
		name: 'Thị giác máy tính',
		key: 'CT210',
	},
	{
		name: 'An ninh mạng',
		key: 'CT211',
	},
	{
		name: 'Quản trị mạng',
		key: 'CT212',
	},
	{
		name: 'Phát triển phần mềm mã nguồn mở',
		key: 'CT213H',
	},
	{
		name: 'Máy học nâng cao',
		key: 'CT214',
	},
	{
		name: 'Lập trình Web',
		key: 'CT214H',
	},
	{
		name: 'Lập trình mạng',
		key: 'CT221',
	},
	{
		name: 'An toàn hệ thống',
		key: 'CT222',
	},
	{
		name: 'Quản lý dự Án phần mềm',
		key: 'CT223',
	},
	{
		name: 'Lập trình Python',
		key: 'CT225',
	},
	{
		name: 'Niên luận cơ sở mạng máy tính và truyền thông',
		key: 'CT226',
	},
	{
		name: 'Kỹ thuật phát hiện tấn công mạng',
		key: 'CT227',
	},
	{
		name: 'Bảo mật website',
		key: 'CT229',
	},
	{
		name: 'Điện toán đám mây',
		key: 'CT233',
	},
	{
		name: 'Quản trị mạng trên MS Windows',
		key: 'CT235',
	},
	{
		name: 'Niên luận cơ sở ngành KTPM',
		key: 'CT239',
	},
	{
		name: 'Nguyên lý xây dựng phần mềm',
		key: 'CT240',
	},
	{
		name: 'Phân tích yêu cầu phần mềm',
		key: 'CT241',
	},
	{
		name: 'Kiến trúc và Thiết kế phần mềm',
		key: 'CT242',
	},
	{
		name: 'Đảm bảo chất lượng và Kiểm thử phần mềm',
		key: 'CT243',
	},
	{
		name: 'Bảo trì phần mềm',
		key: 'CT244',
	},
	{
		name: 'Tương tác người máy',
		key: 'CT245',
	},
	{
		name: 'Lập trình .NET',
		key: 'CT246',
	},
	{
		name: 'Phát triển phần mềm tác nghiệp',
		key: 'CT249',
	},
	{
		name: 'Niên luận ngành Kỹ thuật phần mềm',
		key: 'CT250',
	},
	{
		name: 'Phát triển ứng dụng trên Windows',
		key: 'CT251',
	},
	{
		name: 'Niên luận cơ sở ngành hệ thống thông tin',
		key: 'CT252',
	},
	{
		name: 'Quản trị yêu cầu người dùng',
		key: 'CT253',
	},
	{
		name: 'Bảo mật, an toàn hệ thống thông tin',
		key: 'CT254',
	},
	{
		name: 'Nghiệp vụ thông minh',
		key: 'CT255',
	},
	{
		name: 'Phát triển hệ thống thương mại điện tử',
		key: 'CT258',
	},
	{
		name: 'Niên luận ngành hệ thống thông tin',
		key: 'CT263',
	},
	{
		name: 'Cơ sơ dữ liệu phân tán',
		key: 'CT264',
	},
	{
		name: 'Hệ quản trị cơ sở dữ liệu Oracle',
		key: 'CT269',
	},
	{
		name: 'Niên luận cơ sở - THƯD',
		key: 'CT270',
	},
	{
		name: 'Niên luận cơ sở - CNTT',
		key: 'CT271',
	},
	{
		name: 'Thương mại điện tử - CNTT',
		key: 'CT272',
	},
	{
		name: 'Giao diện người - máy',
		key: 'CT273',
	},
	{
		name: 'Lập trình cho thiết bị di động',
		key: 'CT274',
	},
	{
		name: 'Công nghệ Web',
		key: 'CT275',
	},
	{
		name: 'Lập trình Java',
		key: 'CT276',
	},
	{
		name: 'Hệ quản trị SQL',
		key: 'CT277',
	},
	{
		name: 'Lý thuyết thông tin',
		key: 'CT292',
	},
	{
		name: 'Phân tích và thiết kế hệ thống thông tin',
		key: 'CT296',
	},
	{
		name: 'Thương mại điện tử',
		key: 'CT308H',
	},
	{
		name: 'Phương pháp Nghiên cứu khoa học',
		key: 'CT311',
	},
	{
		name: 'Khai khoáng dữ liệu',
		key: 'CT312',
	},
	{
		name: 'Công nghệ và dịch vụ Web',
		key: 'CT313H',
	},
	{
		name: 'Xử lý Ảnh',
		key: 'CT316',
	},
	{
		name: 'Trí tuệ nhân tạo',
		key: 'CT332',
	},
	{
		name: 'Thiết kế và cài đặt mạng',
		key: 'CT335',
	},
	{
		name: 'Mạng không dây và di động',
		key: 'CT338',
	},
	{
		name: 'Trường điện từ',
		key: 'CT361',
	},
	{
		name: 'Kỹ thuật Anten và truyền sóng',
		key: 'CT363',
	},
	{
		name: 'Thông tin viba và vệ tinh',
		key: 'CT370',
	},
	{
		name: 'Mạng thông tin di động',
		key: 'CT371',
	},
	{
		name: 'Mạng viễn thông',
		key: 'CT372',
	},
	{
		name: 'Điện tử công nghiệp',
		key: 'CT376',
	},
	{
		name: 'Lý thuyết điều khiển tự động',
		key: 'CT377',
	},
	{
		name: 'Cảm biến và chuyển năng',
		key: 'CT378',
	},
	{
		name: 'Kỹ thuật Robot',
		key: 'CT380',
	},
	{
		name: 'Điều khiển giám sát và thu thập dữ liệu',
		key: 'CT381',
	},
	{
		name: 'Mạng nơ-ron nhân tạo',
		key: 'CT384',
	},
	{
		name: 'Hệ điều khiển thời gian thực',
		key: 'CT385',
	},
	{
		name: 'Thông tin số',
		key: 'CT386',
	},
	{
		name: 'TT. Viễn thông',
		key: 'CT390',
	},
	{
		name: 'Cơ sở viễn thông',
		key: 'CT391',
	},
	{
		name: 'Chuyên đề Viễn thông',
		key: 'CT394',
	},
	{
		name: 'Điện tử công suất và ứng dụng',
		key: 'CT395',
	},
	{
		name: 'TT. Điện tử công suất và ứng dụng',
		key: 'CT396',
	},
	{
		name: 'Đo lường và điều khiển bằng máy tính',
		key: 'CT397',
	},
	{
		name: 'Điều khiển mờ',
		key: 'CT398',
	},
	{
		name: 'Hệ thống nhúng',
		key: 'CT399',
	},
	{
		name: 'Chuyên đề kỹ thuật điều khiển',
		key: 'CT400',
	},
	{
		name: 'Kỹ thuật phần cứng máy tính',
		key: 'CT404',
	},
	{
		name: 'Chuyên đề Kỹ thuật máy tính',
		key: 'CT408',
	},
	{
		name: 'Lập trình nhúng',
		key: 'CT409',
	},
	{
		name: 'Thực tập thực tế',
		key: 'CT415',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KTĐK',
		key: 'CT416',
	},
	{
		name: 'Luận văn tốt nghiệp - KTĐK',
		key: 'CT417',
	},
	{
		name: 'Tiểu luận tốt nghiệp - DTVT',
		key: 'CT421',
	},
	{
		name: 'Luận văn tốt nghiệp - ĐTVT',
		key: 'CT422',
	},
	{
		name: 'Kỹ thuật truyền số liệu',
		key: 'CT423',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KTMT',
		key: 'CT426',
	},
	{
		name: 'Luận văn tốt nghiệp - KTMT',
		key: 'CT427',
	},
	{
		name: 'Lập trình Web',
		key: 'CT428',
	},
	{
		name: 'Phân tích hệ thống hướng đối tượng',
		key: 'CT430',
	},
	{
		name: 'Niên luận Mạng máy tính và truyền thông',
		key: 'CT439',
	},
	{
		name: 'Đồ Án kỹ thuật điện tử',
		key: 'CT441',
	},
	{
		name: 'Phát triển ứng dụng Web',
		key: 'CT449',
	},
	{
		name: 'Tiểu luận tốt nghiệp - HTTT',
		key: 'CT461',
	},
	{
		name: 'Tiểu luận tốt nghiệp - TT&MMT',
		key: 'CT462',
	},
	{
		name: 'Quản trị dự án Công nghệ thông tin',
		key: 'CT463',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KTPM',
		key: 'CT464',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KHMT',
		key: 'CT465',
	},
	{
		name: 'Niên luận - CNTT',
		key: 'CT466',
	},
	{
		name: 'Tiểu luận tốt nghiệp - CNTT',
		key: 'CT468',
	},
	{
		name: 'Quản trị dữ liệu ứng dụng',
		key: 'CT469',
	},
	{
		name: 'Xây dựng ứng dụng Web với PHP',
		key: 'CT480',
	},
	{
		name: 'Luận văn tốt nghiệp',
		key: 'CT502H',
	},
	{
		name: 'Luận văn tốt nghiệp - HTTT',
		key: 'CT591',
	},
	{
		name: 'Luận văn tốt nghiệp - TT&MMT',
		key: 'CT592',
	},
	{
		name: 'Luận văn tốt nghiệp - CNTT',
		key: 'CT593',
	},
	{
		name: 'Luận văn tốt nghiệp - KTPM',
		key: 'CT594',
	},
	{
		name: 'Luận văn tốt nghiệp - KHMT',
		key: 'CT595',
	},
	{
		name: 'Tiếng Anh chuyên ngành',
		key: 'EN103C',
	},
	{
		name: 'Pháp văn căn bản 1 (*)',
		key: 'FL001',
	},
	{
		name: 'Nghe và Nói 1',
		key: 'FL001H',
	},
	{
		name: 'Pháp văn căn bản 2 (*)',
		key: 'FL002',
	},
	{
		name: 'Pháp văn căn bản 3 (*)',
		key: 'FL003',
	},
	{
		name: 'Đọc hiểu 1',
		key: 'FL003H',
	},
	{
		name: 'Viết 1',
		key: 'FL005H',
	},
	{
		name: 'Ngữ pháp ứng dụng',
		key: 'FL007H',
	},
	{
		name: 'Ngữ âm thực hành',
		key: 'FL008H',
	},
	{
		name: 'Kỹ năng thuyết trình',
		key: 'FL009H',
	},
	{
		name: 'Kỹ năng giải quyết vấn đề',
		key: 'FL092H',
	},
	{
		name: 'Kỹ năng quản lý công việc',
		key: 'FL095H',
	},
	{
		name: 'Kỹ năng xin việc',
		key: 'FL096H',
	},
	{
		name: 'Ngữ pháp trung cấp',
		key: 'FL101H',
	},
	{
		name: 'Ngữ âm thực hành 1',
		key: 'FL103H',
	},
	{
		name: 'Nghe Nói 1 - Kỹ năng giao tiếp căn bản',
		key: 'FL105H',
	},
	{
		name: 'Nghe Nói 3 - Kỹ năng giao tiếp trung cấp 2',
		key: 'FL107H',
	},
	{
		name: 'Nghe Nói 5 - Kỹ năng nói trước công chúng',
		key: 'FL109H',
	},
	{
		name: 'Đọc 1 - Kỹ năng đọc hiểu căn bản',
		key: 'FL110H',
	},
	{
		name: 'Đọc 3 - Kỹ năng đọc hiểu trung cấp 2',
		key: 'FL112H',
	},
	{
		name: 'Đọc 5 - Đọc mở rộng',
		key: 'FL114H',
	},
	{
		name: 'Viết 1 - Viết đoạn',
		key: 'FL115H',
	},
	{
		name: 'Viết 3 - Các thể loại luận 2',
		key: 'FL117H',
	},
	{
		name: 'Viết 5- Văn bản khoa học',
		key: 'FL119H',
	},
	{
		name: 'Từ pháp học và cú pháp học tiếng Anh',
		key: 'FL203H',
	},
	{
		name: 'Đọc - Viết B1',
		key: 'FL205',
	},
	{
		name: 'Dẫn luận văn chương',
		key: 'FL205H',
	},
	{
		name: 'Đọc - Viết B2.1',
		key: 'FL206',
	},
	{
		name: 'Đọc - Viết B2.2',
		key: 'FL207',
	},
	{
		name: 'Đọc - Viết C1.1',
		key: 'FL208',
	},
	{
		name: 'Đọc C1.2',
		key: 'FL209',
	},
	{
		name: 'Biên dịch căn bản',
		key: 'FL209H',
	},
	{
		name: 'Đọc phát triển kỹ năng phản biện',
		key: 'FL211',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học trong lĩnh vực Ngôn ngữ và Văn hóa',
		key: 'FL211H',
	},
	{
		name: 'Giao tiếp liên văn hóa',
		key: 'FL212',
	},
	{
		name: 'Seminar chuyên ngành - Ngôn ngữ Anh',
		key: 'FL214H',
	},
	{
		name: 'Kỹ năng thuyết trình',
		key: 'FL215',
	},
	{
		name: 'Lý luận dạy học ngoại ngữ',
		key: 'FL217',
	},
	{
		name: 'Nghe - Nói B1',
		key: 'FL219',
	},
	{
		name: 'Nghe - Nói B2.1',
		key: 'FL220',
	},
	{
		name: 'Nghe - Nói B2.2',
		key: 'FL221',
	},
	{
		name: 'Nghe - Nói C1.1',
		key: 'FL222',
	},
	{
		name: 'Nghe - Nói C1.2',
		key: 'FL223',
	},
	{
		name: 'Phân tích tác nghiệp Tiếng Pháp',
		key: 'FL237',
	},
	{
		name: 'Tiếng Anh du lịch',
		key: 'FL248',
	},
	{
		name: 'Tổ chức hoạt động trải nghiệm trong giảng dạy Tiếng Anh',
		key: 'FL258',
	},
	{
		name: 'Viết 4 - PV',
		key: 'FL261',
	},
	{
		name: 'Viết C1.2',
		key: 'FL262',
	},
	{
		name: 'Tiếng Anh kinh doanh',
		key: 'FL302H',
	},
	{
		name: 'Tiếng Anh du lịch',
		key: 'FL303H',
	},
	{
		name: 'Quản trị kinh doanh nhà hàng',
		key: 'FL305H',
	},
	{
		name: 'Quản trị du lịch và dịch vụ',
		key: 'FL306H',
	},
	{
		name: 'Marketing căn bản',
		key: 'FL307H',
	},
	{
		name: 'Khởi nghiệp',
		key: 'FL308H',
	},
	{
		name: 'Nghi thức ngoại giao',
		key: 'FL309H',
	},
	{
		name: 'Công nghệ bảo quản và chế biến nông-lâm-thủy sản',
		key: 'HG255',
	},
	{
		name: 'Quản trị và điều hành các tổ chức kinh tế hợp tác',
		key: 'HG256',
	},
	{
		name: 'Luận văn tốt nghiệp – KDNN',
		key: 'HG351',
	},
	{
		name: 'Tiểu luận tốt nghiệp – KDNN',
		key: 'HG352',
	},
	{
		name: 'Chuyên đề tổng hợp Kinh doanh nông nghiệp',
		key: 'HG354',
	},
	{
		name: 'TT. Hóa lý',
		key: 'KC098H',
	},
	{
		name: 'Toán kỹ thuật',
		key: 'KC100H',
	},
	{
		name: 'Xử lý tín hiệu số',
		key: 'KC101',
	},
	{
		name: 'Thiết kế hệ thống số',
		key: 'KC102',
	},
	{
		name: 'Hóa học vô cơ',
		key: 'KC102H',
	},
	{
		name: 'TT. Mạch và Tín hiệu',
		key: 'KC103',
	},
	{
		name: 'TT. Hóa hữu cơ',
		key: 'KC105H',
	},
	{
		name: 'Cơ học đất',
		key: 'KC106',
	},
	{
		name: 'Hóa lý: Nhiệt động hóa học',
		key: 'KC106H',
	},
	{
		name: 'TT. Hóa học đại cương',
		key: 'KC109H',
	},
	{
		name: 'TT. Hóa phân tích',
		key: 'KC110H',
	},
	{
		name: 'Tin học ứng dụng cầu',
		key: 'KC111',
	},
	{
		name: 'Hóa lý: Nhiệt động hóa học',
		key: 'KC112',
	},
	{
		name: 'An toàn trong thí nghiệm hóa học',
		key: 'KC113',
	},
	{
		name: 'Thiết kế và phân tích thí nghiệm',
		key: 'KC113H',
	},
	{
		name: 'Đồ họa kỹ thuật trên máy tính',
		key: 'KC114',
	},
	{
		name: 'Tham quan định hướng ngành nghề',
		key: 'KC114H',
	},
	{
		name: 'TT. Địa chất công trình - CĐ',
		key: 'KC115',
	},
	{
		name: 'Vật liệu điện',
		key: 'KC116',
	},
	{
		name: 'Nhiệt động lực học và Truyền nhiệt',
		key: 'KC116H',
	},
	{
		name: 'Kỹ thuật đo',
		key: 'KC117',
	},
	{
		name: 'Điện tử cơ bản',
		key: 'KC118',
	},
	{
		name: 'Mạch xung',
		key: 'KC119',
	},
	{
		name: 'Đồ án Quá trình và Thiết bị',
		key: 'KC119H',
	},
	{
		name: 'Thực tập ngành nghề',
		key: 'KC120H',
	},
	{
		name: 'TT. Khoa học và kỹ thuật vật liệu đại cương',
		key: 'KC121',
	},
	{
		name: 'Cơ sở Thiết kế máy và Thiết bị hóa chất',
		key: 'KC121H',
	},
	{
		name: 'Các phương pháp phân tích hiện đại',
		key: 'KC123H',
	},
	{
		name: 'Seminar chuyên ngành',
		key: 'KC125H',
	},
	{
		name: 'Đồ án thiết kế và chế tạo sản phẩm',
		key: 'KC126H',
	},
	{
		name: 'Cơ sở thiết kế nhà máy hóa chất',
		key: 'KC127H',
	},
	{
		name: 'Điều khiển quá trình - KTVL',
		key: 'KC128',
	},
	{
		name: 'Bê tông dự ứng lực',
		key: 'KC130',
	},
	{
		name: 'Điều khiển quá trình',
		key: 'KC131H',
	},
	{
		name: 'Cấu trúc máy tính',
		key: 'KC133',
	},
	{
		name: 'Kỹ thuật xúc tác',
		key: 'KC133H',
	},
	{
		name: 'Luận văn tốt nghiệp',
		key: 'KC153H',
	},
	{
		name: 'Toán kỹ thuật',
		key: 'KC156H',
	},
	{
		name: 'Mạch điện 2',
		key: 'KC160H',
	},
	{
		name: 'Trường điện từ',
		key: 'KC161H',
	},
	{
		name: 'Kỹ thuật đo',
		key: 'KC163H',
	},
	{
		name: 'Sức bền vật liệu - XD',
		key: 'KC169H',
	},
	{
		name: 'Hình họa và Vẽ kỹ thuật - XD',
		key: 'KC170H',
	},
	{
		name: 'Địa chất công trình',
		key: 'KC172H',
	},
	{
		name: 'Trắc địa',
		key: 'KC173H',
	},
	{
		name: 'Vật liệu xây dựng',
		key: 'KC174H',
	},
	{
		name: 'Cơ học lưu chất',
		key: 'KC176H',
	},
	{
		name: 'Thống kê ứng dụng kỹ thuật',
		key: 'KC177H',
	},
	{
		name: 'Kết cấu bê-tông cơ sở',
		key: 'KC182H',
	},
	{
		name: 'Kết cấu thép',
		key: 'KC184H',
	},
	{
		name: 'Thống kê ứng dụng',
		key: 'KC198',
	},
	{
		name: 'Hóa vô cơ và hữu cơ đại cương',
		key: 'KC199',
	},
	{
		name: 'Thực tập Hệ thống điện',
		key: 'KC201',
	},
	{
		name: 'Máy điện 1',
		key: 'KC201H',
	},
	{
		name: 'TT. Tay nghề điện',
		key: 'KC203',
	},
	{
		name: 'Ngắn mạch và ổn định hệ thống điện',
		key: 'KC204',
	},
	{
		name: 'Hệ thống điện 2',
		key: 'KC204H',
	},
	{
		name: 'Truyền động điện',
		key: 'KC205',
	},
	{
		name: 'Bảo vệ rơle và tự động hóa',
		key: 'KC206',
	},
	{
		name: 'PLC-KT. Điện',
		key: 'KC207',
	},
	{
		name: 'TT. Tay nghề điện',
		key: 'KC207H',
	},
	{
		name: 'Đồ Án điện công nghiệp',
		key: 'KC208',
	},
	{
		name: 'Kỹ thuật cao áp',
		key: 'KC208H',
	},
	{
		name: 'Điện tử công suất',
		key: 'KC209',
	},
	{
		name: 'Năng lượng tái tạo',
		key: 'KC211',
	},
	{
		name: 'Bảo vệ rơle và tự động hoá',
		key: 'KC211H',
	},
	{
		name: 'Khí cụ điện',
		key: 'KC214H',
	},
	{
		name: 'Thiết kế máy biến Áp điện lực',
		key: 'KC215',
	},
	{
		name: 'Đồ án Điện công nghiệp',
		key: 'KC215H',
	},
	{
		name: 'Điện tử công suất',
		key: 'KC217H',
	},
	{
		name: 'Xử lý tín hiệu số nâng cao',
		key: 'KC219',
	},
	{
		name: 'TT. Xử lý tín hiệu số nâng cao',
		key: 'KC220',
	},
	{
		name: 'Kỹ thuật siêu cao tần',
		key: 'KC221',
	},
	{
		name: 'Truyền thông không dây',
		key: 'KC222',
	},
	{
		name: 'Lập trình truyền thông',
		key: 'KC223',
	},
	{
		name: 'Phát triển ứng dụng hệ thống nhúng',
		key: 'KC224',
	},
	{
		name: 'Lập trình điều khiển trên thiết bị di động',
		key: 'KC225',
	},
	{
		name: 'Phân tích và thiết kế thuật toán',
		key: 'KC226',
	},
	{
		name: 'Đồ họa máy tính',
		key: 'KC227',
	},
	{
		name: 'Vẽ kỹ thuật - kỹ thuật điện',
		key: 'KC228',
	},
	{
		name: 'Vi mạch số',
		key: 'KC229',
	},
	{
		name: 'Vi mạch tương tự',
		key: 'KC230',
	},
	{
		name: 'Lập trình mạng',
		key: 'KC231',
	},
	{
		name: 'Đường đô thị',
		key: 'KC234',
	},
	{
		name: 'Thiết kế hệ điều khiển - TĐH',
		key: 'KC236',
	},
	{
		name: 'Cấu trúc dữ liệu và giải thuật - CN',
		key: 'KC237',
	},
	{
		name: 'Khoa học và kỹ thuật vật liệu đại cương',
		key: 'KC238H',
	},
	{
		name: 'Quá trình và thiết bị truyền khối - KTHH',
		key: 'KC239H',
	},
	{
		name: 'Nền móng công trình',
		key: 'KC240',
	},
	{
		name: 'Kết cấu bê-tông cơ sở',
		key: 'KC241',
	},
	{
		name: 'Truyền vận',
		key: 'KC241H',
	},
	{
		name: 'Kiến trúc công trình',
		key: 'KC242',
	},
	{
		name: 'Tổ chức thi công và an toàn lao động',
		key: 'KC243',
	},
	{
		name: 'Cấu kiện bê-tông đặc biệt',
		key: 'KC245',
	},
	{
		name: 'Nền móng công trình',
		key: 'KC245H',
	},
	{
		name: 'Công trình trên đất yếu',
		key: 'KC246',
	},
	{
		name: 'Đồ án nền móng công trình',
		key: 'KC246H',
	},
	{
		name: 'Kỹ thuật thi công công trình đặc biệt',
		key: 'KC247',
	},
	{
		name: 'Công trình xanh',
		key: 'KC248',
	},
	{
		name: 'Công trình bảo vệ bờ',
		key: 'KC249',
	},
	{
		name: 'Đánh giá tác động môi trường - XD',
		key: 'KC250',
	},
	{
		name: 'Thi công công trình thủy lợi',
		key: 'KC251',
	},
	{
		name: 'Chuyên đề XD1 - Nền móng',
		key: 'KC257',
	},
	{
		name: 'Chuyên đề XD2 - Kết cấu bê tông',
		key: 'KC258',
	},
	{
		name: 'Chuyên đề XD3 - Kết cấu thép',
		key: 'KC259',
	},
	{
		name: 'Chuyên đề XD4 - Thi công',
		key: 'KC260',
	},
	{
		name: 'Chuyên đề XD5 - Qui hoạch, Kiến trúc',
		key: 'KC261',
	},
	{
		name: 'Kỹ thuật bảo trì công nghiệp',
		key: 'KC262',
	},
	{
		name: 'Lập trình hướng đối tượng',
		key: 'KC263',
	},
	{
		name: 'Thiết kế cầu bê-tông nâng cao',
		key: 'KC264',
	},
	{
		name: 'Đồ án Thiết kế cầu bê tông',
		key: 'KC268',
	},
	{
		name: 'Kinh tế xây dựng',
		key: 'KC269',
	},
	{
		name: 'Đồ án Thiết kế cầu thép',
		key: 'KC271',
	},
	{
		name: 'Đồ Án Mố trụ cầu',
		key: 'KC273',
	},
	{
		name: 'Đồ án thiết kế đường ô tô',
		key: 'KC274',
	},
	{
		name: 'Khai thác và Kiểm định công trình cầu',
		key: 'KC277',
	},
	{
		name: 'Nền móng công trình - CĐ',
		key: 'KC279',
	},
	{
		name: 'Thiết kế cầu bê tông',
		key: 'KC288',
	},
	{
		name: 'Đồ án chuyên ngành - KTVL',
		key: 'KC290',
	},
	{
		name: 'Đồ án thiết kế - KTVL',
		key: 'KC291',
	},
	{
		name: 'Đồ án gia công - KTVL',
		key: 'KC292',
	},
	{
		name: 'Nhiên liệu sinh học',
		key: 'KC294',
	},
	{
		name: 'Thực tập ngành nghề - KTVL',
		key: 'KC295',
	},
	{
		name: 'TT. Các phương pháp phân tích vật liệu',
		key: 'KC297',
	},
	{
		name: 'Phân tích vật liệu polymer',
		key: 'KC298',
	},
	{
		name: 'Công nghệ vật liệu hữu cơ-kim loại',
		key: 'KC301',
	},
	{
		name: 'Vật liệu kim loại',
		key: 'KC306',
	},
	{
		name: 'Vật liệu ceramic kỹ thuật',
		key: 'KC307',
	},
	{
		name: 'Luận văn tốt nghiệp-KTVL',
		key: 'KC308',
	},
	{
		name: 'Tiểu luận tốt nghiệp-KTVL',
		key: 'KC309',
	},
	{
		name: 'Hệ thống thông tin quản lý - QLCN',
		key: 'KC317',
	},
	{
		name: 'Chuyên đề quản lý dự án',
		key: 'KC320',
	},
	{
		name: 'Cơ sở thiết kế máy và thiết bị hóa chất',
		key: 'KC325',
	},
	{
		name: 'Công nghệ IoT và ứng dụng',
		key: 'KC326',
	},
	{
		name: 'Đồ án nền móng công trình thủy',
		key: 'KC327',
	},
	{
		name: 'Đo lường điện',
		key: 'KC328',
	},
	{
		name: 'Xây dựng dự án kỹ thuật phục vụ cộng đồng (EPICS)',
		key: 'KC329',
	},
	{
		name: 'Giải tích hệ thống điện',
		key: 'KC330',
	},
	{
		name: 'Đồ án điện tử căn bản',
		key: 'KC331',
	},
	{
		name: 'Khoa học và kỹ thuật vật liệu đại cương',
		key: 'KC333',
	},
	{
		name: 'Kiến trúc công trình',
		key: 'KC335',
	},
	{
		name: 'Kỹ thuật điện công nghiệp',
		key: 'KC336',
	},
	{
		name: 'Kỹ thuật điều khiển tự động',
		key: 'KC337',
	},
	{
		name: 'Lập trình Matlab',
		key: 'KC341',
	},
	{
		name: 'Lập trình ứng dụng - CK',
		key: 'KC343',
	},
	{
		name: 'Linh kiện bán dẫn',
		key: 'KC344',
	},
	{
		name: 'Mạch điện',
		key: 'KC346',
	},
	{
		name: 'Mạch điện tử',
		key: 'KC347',
	},
	{
		name: 'Mạch xung số',
		key: 'KC349',
	},
	{
		name: 'Máy điện',
		key: 'KC351',
	},
	{
		name: 'Mô hình hóa và mô phỏng',
		key: 'KC353',
	},
	{
		name: 'Mô hình thông tin xây dựng (BIM)',
		key: 'KC354',
	},
	{
		name: 'Nhiệt động lực học kỹ thuật',
		key: 'KC356',
	},
	{
		name: 'Quá trình và thiết bị truyền nhiệt',
		key: 'KC361',
	},
	{
		name: 'Năng lượng tái tạo và quản lý',
		key: 'KC363',
	},
	{
		name: 'Robot công nghiệp',
		key: 'KC364',
	},
	{
		name: 'Tổng luận công trình giao thông',
		key: 'KC369',
	},
	{
		name: 'Truyền vận',
		key: 'KC370',
	},
	{
		name: 'TT. Linh kiện điện tử',
		key: 'KC372',
	},
	{
		name: 'TT. Máy điện',
		key: 'KC373',
	},
	{
		name: 'Vẽ kỹ thuật',
		key: 'KC379',
	},
	{
		name: 'Ứng dụng vật liệu địa kỹ thuật',
		key: 'KC380',
	},
	{
		name: 'Vi điều khiển ứng dụng',
		key: 'KC381',
	},
	{
		name: 'Phương pháp lựa chọn và sử dụng vật liệu',
		key: 'KC386',
	},
	{
		name: 'Thực tập thực tế - KTCĐT',
		key: 'KC387',
	},
	{
		name: 'TT. Hóa vô cơ và hữu cơ đại cương',
		key: 'KC388',
	},
	{
		name: 'Lý thuyết thí nghiệm nền móng',
		key: 'KC389',
	},
	{
		name: 'Kết cấu thép cầu',
		key: 'KC390',
	},
	{
		name: 'Nghiên cứu và phát triển sản phẩm',
		key: 'KC393',
	},
	{
		name: 'Luận văn tốt nghiệp - KTXD',
		key: 'KC507',
	},
	{
		name: 'Pháp luật đại cương',
		key: 'KL001',
	},
	{
		name: 'Quyền con người',
		key: 'KL051',
	},
	{
		name: 'Lý luận nhà nước và pháp luật 1',
		key: 'KL101',
	},
	{
		name: 'Lý luận nhà nước và pháp luật 2',
		key: 'KL102',
	},
	{
		name: 'Luật so sánh',
		key: 'KL105',
	},
	{
		name: 'Lịch sử nhà nước và pháp luật',
		key: 'KL113',
	},
	{
		name: 'Soạn thảo văn bản pháp luật',
		key: 'KL114',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - Luật',
		key: 'KL115',
	},
	{
		name: 'Thuật ngữ pháp lý - tiếng Anh',
		key: 'KL116',
	},
	{
		name: 'Luật hình sự phần riêng',
		key: 'KL119',
	},
	{
		name: 'Luật hôn nhân và gia đình',
		key: 'KL122',
	},
	{
		name: 'Luật lao động',
		key: 'KL123',
	},
	{
		name: 'Luật tài chính nhà nước',
		key: 'KL124',
	},
	{
		name: 'Luật hiến pháp',
		key: 'KL126',
	},
	{
		name: 'Luật hành chính',
		key: 'KL127',
	},
	{
		name: 'Pháp luật thương mại 1',
		key: 'KL131',
	},
	{
		name: 'Pháp luật thương mại 2',
		key: 'KL132',
	},
	{
		name: 'Luật dân sự: Nghĩa vụ dân sự',
		key: 'KL133',
	},
	{
		name: 'Luật hình sự: Định tội và định khung hình phạt',
		key: 'KL203',
	},
	{
		name: 'Trình tự, thủ tục giải quyết vụ án hình sự',
		key: 'KL205',
	},
	{
		name: 'Trình tự, thủ tục giải quyết vụ việc dân sự',
		key: 'KL206',
	},
	{
		name: 'Pháp luật về quan hệ hôn nhân và quan hệ gia đình',
		key: 'KL207',
	},
	{
		name: 'Luật hình sự quốc tế',
		key: 'KL208',
	},
	{
		name: 'Pháp luật về quy hoạch và giải phóng mặt bằng',
		key: 'KL210',
	},
	{
		name: 'Luật hiến pháp nước ngoài',
		key: 'KL211',
	},
	{
		name: 'Luật hành chính các nước',
		key: 'KL212',
	},
	{
		name: 'Luật môi trường',
		key: 'KL213',
	},
	{
		name: 'Pháp luật về thương nhân',
		key: 'KL214',
	},
	{
		name: 'Luật thương mại',
		key: 'KL215',
	},
	{
		name: 'Luật thương mại quốc tế công',
		key: 'KL217',
	},
	{
		name: 'Luật thuế',
		key: 'KL219',
	},
	{
		name: 'Pháp luật về sở hữu trí tuệ trong thương mại',
		key: 'KL220',
	},
	{
		name: 'Kỹ thuật soạn thảo hợp đồng thương mại',
		key: 'KL221',
	},
	{
		name: 'Luật hình sự: Những vấn đề lý luận về hình phạt',
		key: 'KL223',
	},
	{
		name: 'Luật dân sự: Tài sản, quyền sở hữu và quyền thừa kế',
		key: 'KL224',
	},
	{
		name: 'Những vấn đề lý luận chung về luật tố tụng hình sự',
		key: 'KL225',
	},
	{
		name: 'Những vấn đề lý luận chung về luật tố tụng dân sự',
		key: 'KL226',
	},
	{
		name: 'Pháp luật tố tụng dân sự',
		key: 'KL227',
	},
	{
		name: 'Luật ngân sách nhà nước',
		key: 'KL228',
	},
	{
		name: 'Luật tố tụng thương mại và phá sản',
		key: 'KL230',
	},
	{
		name: 'Luật dân sự: Chủ thể, tài sản, quyền sở hữu và quyền thừa kế',
		key: 'KL231',
	},
	{
		name: 'Học thuyết pháp lý',
		key: 'KL233',
	},
	{
		name: 'Luật hiến pháp 1',
		key: 'KL301',
	},
	{
		name: 'Luật hiến pháp 2',
		key: 'KL302',
	},
	{
		name: 'Luật hành chính 1',
		key: 'KL303',
	},
	{
		name: 'Luật hành chính 2',
		key: 'KL304',
	},
	{
		name: 'Luật lao động 1',
		key: 'KL322',
	},
	{
		name: 'Luật đất đai',
		key: 'KL327',
	},
	{
		name: 'Luật môi trường',
		key: 'KL328',
	},
	{
		name: 'Tư pháp quốc tế 1',
		key: 'KL331',
	},
	{
		name: 'Tư pháp quốc tế 2',
		key: 'KL332',
	},
	{
		name: 'Luật thương mại quốc tế',
		key: 'KL333',
	},
	{
		name: 'Pháp luật về sở hữu trí tuệ',
		key: 'KL335',
	},
	{
		name: 'Bảo đảm nghĩa vụ',
		key: 'KL344',
	},
	{
		name: 'Pháp luật về khiếu nại và khiếu kiện hành chính',
		key: 'KL353',
	},
	{
		name: 'Pháp luật về thanh tra',
		key: 'KL365',
	},
	{
		name: 'Luật kinh tế',
		key: 'KL369',
	},
	{
		name: 'Luận văn tốt nghiệp - Luật',
		key: 'KL370',
	},
	{
		name: 'Luật tố tụng hình sự',
		key: 'KL371',
	},
	{
		name: 'Công pháp quốc tế',
		key: 'KL375',
	},
	{
		name: 'Tư pháp quốc tế',
		key: 'KL376',
	},
	{
		name: 'Pháp luật về xây dựng',
		key: 'KL377',
	},
	{
		name: 'Luật hành chính 3',
		key: 'KL378',
	},
	{
		name: 'Luật an sinh xã hội',
		key: 'KL380',
	},
	{
		name: 'Tổ chức công sở và nhân sự hành chính',
		key: 'KL382',
	},
	{
		name: 'Quản lý nhà nước về hộ tịch',
		key: 'KL383',
	},
	{
		name: 'Luật về kinh doanh bất động sản',
		key: 'KL384',
	},
	{
		name: 'Thủ tục hành chính về nhà đất',
		key: 'KL385',
	},
	{
		name: 'Pháp luật về nhà ở',
		key: 'KL386',
	},
	{
		name: 'Luật ngân hàng',
		key: 'KL388',
	},
	{
		name: 'Pháp luật về cạnh tranh',
		key: 'KL389',
	},
	{
		name: 'Pháp luật về chứng khoán và thị trường chứng khoán',
		key: 'KL391',
	},
	{
		name: 'Pháp luật về hoạt động xuất nhập khẩu',
		key: 'KL392',
	},
	{
		name: 'Pháp luật về đầu tư',
		key: 'KL393',
	},
	{
		name: 'Pháp luật về thương mại điện tử',
		key: 'KL396',
	},
	{
		name: 'Nghiệp vụ tòa án',
		key: 'KL397',
	},
	{
		name: 'Khoa học điều tra hình sự',
		key: 'KL400',
	},
	{
		name: 'Tội phạm học',
		key: 'KL401',
	},
	{
		name: 'Giám định pháp y',
		key: 'KL403',
	},
	{
		name: 'Luật hợp đồng thông dụng',
		key: 'KL404',
	},
	{
		name: 'Thực hành nghề Luật',
		key: 'KL406',
	},
	{
		name: 'Luật về bất động sản',
		key: 'KL410',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Luật',
		key: 'KL411',
	},
	{
		name: 'Chuyên đề luật hình sự và tố tụng hình sự',
		key: 'KL412',
	},
	{
		name: 'Chuyên đề luật dân sự và tố tụng dân sự',
		key: 'KL413',
	},
	{
		name: 'Kỹ thuật soạn thảo văn bản hành chính',
		key: 'KL419',
	},
	{
		name: 'Các hoạt động hành chính tư pháp',
		key: 'KL421',
	},
	{
		name: 'Xử phạt vi phạm hành chính trong một số lĩnh vực',
		key: 'KL422',
	},
	{
		name: 'Pháp luật về hợp đồng trong thương mại',
		key: 'KL427',
	},
	{
		name: 'Kỹ năng mềm',
		key: 'KN001',
	},
	{
		name: 'Đổi mới sáng tạo và khởi nghiệp',
		key: 'KN002',
	},
	{
		name: 'Kinh tế tài nguyên môi trường',
		key: 'KT002',
	},
	{
		name: 'Quản trị doanh nghiệp đại cương',
		key: 'KT005',
	},
	{
		name: 'Kỹ năng giao tiếp',
		key: 'KT022',
	},
	{
		name: 'Kỹ năng làm việc nhóm',
		key: 'KT058H',
	},
	{
		name: 'Kỹ năng đàm phán và thương lượng',
		key: 'KT059H',
	},
	{
		name: 'Kỹ năng xin việc',
		key: 'KT061H',
	},
	{
		name: 'Kinh tế vi mô 1',
		key: 'KT101',
	},
	{
		name: 'Toán kinh tế',
		key: 'KT101H',
	},
	{
		name: 'Kinh tế vĩ mô 1',
		key: 'KT102',
	},
	{
		name: 'Anh văn chuyên ngành Kinh doanh quốc tế',
		key: 'KT102H',
	},
	{
		name: 'Quản trị học',
		key: 'KT103',
	},
	{
		name: 'Kinh tế vi mô',
		key: 'KT103H',
	},
	{
		name: 'Marketing căn bản',
		key: 'KT104',
	},
	{
		name: 'Toán kinh tế 1',
		key: 'KT105',
	},
	{
		name: 'Nguyên lý kế toán',
		key: 'KT106',
	},
	{
		name: 'Quản trị học',
		key: 'KT106H',
	},
	{
		name: 'Toán kinh tế 2',
		key: 'KT107',
	},
	{
		name: 'Nguyên lý thống kê kinh tế',
		key: 'KT108',
	},
	{
		name: 'Nguyên lý kế toán',
		key: 'KT108H',
	},
	{
		name: 'Phương pháp nghiên cứu kinh tế',
		key: 'KT109',
	},
	{
		name: 'Tài chính - Tiền tệ',
		key: 'KT111',
	},
	{
		name: 'Kinh tế quốc tế',
		key: 'KT111H',
	},
	{
		name: 'Kinh tế lượng',
		key: 'KT113',
	},
	{
		name: 'Thuế',
		key: 'KT113H',
	},
	{
		name: 'Kinh tế công cộng',
		key: 'KT114',
	},
	{
		name: 'Kinh tế phát triển',
		key: 'KT115',
	},
	{
		name: 'Quản trị tài chính 1',
		key: 'KT116H',
	},
	{
		name: 'Kinh tế học Ngân hàng',
		key: 'KT117H',
	},
	{
		name: 'Kinh tế học hành vi',
		key: 'KT118',
	},
	{
		name: 'Phương pháp tư duy và kỹ năng giải quyết vấn đề',
		key: 'KT119',
	},
	{
		name: 'Phương pháp nghiên cứu trong kinh doanh',
		key: 'KT120',
	},
	{
		name: 'Quản trị sự thay đổi',
		key: 'KT123',
	},
	{
		name: 'Lý thuyết và chính sách thương mại',
		key: 'KT125',
	},
	{
		name: 'Phương pháp nghiên cứu trong Kế toán - Kiểm toán',
		key: 'KT126',
	},
	{
		name: 'Kế toán tài chính 3',
		key: 'KT128',
	},
	{
		name: 'Kinh tế lượng',
		key: 'KT128H',
	},
	{
		name: 'Chuẩn mực kế toán',
		key: 'KT130',
	},
	{
		name: 'Kiến tập ngành Kinh tế tài nguyên môi trường',
		key: 'KT133',
	},
	{
		name: 'Kiến tập ngành Kinh tế',
		key: 'KT134',
	},
	{
		name: 'Pháp luật ngân hàng thương mại',
		key: 'KT141',
	},
	{
		name: 'Seminar kinh tế nông nghiệp',
		key: 'KT196',
	},
	{
		name: 'Chuẩn mực kế toán quốc tế',
		key: 'KT198',
	},
	{
		name: 'Digital Marketing',
		key: 'KT200',
	},
	{
		name: 'Quản trị dự án',
		key: 'KT201',
	},
	{
		name: 'Ứng dụng toán trong kinh doanh',
		key: 'KT203',
	},
	{
		name: 'Quản trị nguồn nhân lực',
		key: 'KT204',
	},
	{
		name: 'Quy hoạch tuyến tính',
		key: 'KT205',
	},
	{
		name: 'Đạo đức kinh doanh và văn hóa doanh nghiệp',
		key: 'KT206',
	},
	{
		name: 'Mô phỏng tình huống trong kinh doanh',
		key: 'KT207',
	},
	{
		name: 'Quản trị hệ thống thông tin doanh nghiệp',
		key: 'KT208',
	},
	{
		name: 'Anh văn chuyên môn kinh tế',
		key: 'KT209',
	},
	{
		name: 'Tâm lý quản lý',
		key: 'KT210',
	},
	{
		name: 'Quản trị kinh doanh lữ hành',
		key: 'KT211',
	},
	{
		name: 'Quản trị kinh doanh lưu trú',
		key: 'KT212',
	},
	{
		name: 'Quản trị kinh doanh nhà hàng',
		key: 'KT213',
	},
	{
		name: 'Tổ chức sự kiện',
		key: 'KT214',
	},
	{
		name: 'Marketing địa phương',
		key: 'KT215',
	},
	{
		name: 'Marketing thương mại',
		key: 'KT217',
	},
	{
		name: 'Chiêu thị và truyền thông Marketing',
		key: 'KT218',
	},
	{
		name: 'Quan hệ công chúng',
		key: 'KT220',
	},
	{
		name: 'Phân tích báo cáo tài chính',
		key: 'KT222',
	},
	{
		name: 'Anh văn thương mại 2',
		key: 'KT223',
	},
	{
		name: 'Vận tải và bảo hiểm ngoại thương',
		key: 'KT224',
	},
	{
		name: 'Đàm phán kinh doanh quốc tế',
		key: 'KT225',
	},
	{
		name: 'Quản trị tài chính các công ty đa quốc gia',
		key: 'KT226',
	},
	{
		name: 'Logistic trong ngoại thương',
		key: 'KT227',
	},
	{
		name: 'Chuyên đề ngành',
		key: 'KT228',
	},
	{
		name: 'Kiến tập ngành kinh doanh thương mại',
		key: 'KT229',
	},
	{
		name: 'Quản trị chuỗi cung ứng',
		key: 'KT230',
	},
	{
		name: 'Chuyên đề ngành kiểm toán',
		key: 'KT236',
	},
	{
		name: 'Marketing nông nghiệp',
		key: 'KT240',
	},
	{
		name: 'Kế toán môi trường',
		key: 'KT242',
	},
	{
		name: 'Quản trị rủi ro trong thị trường nông sản',
		key: 'KT243',
	},
	{
		name: 'Phân tích chuỗi cung Ứng hàng nông sản',
		key: 'KT244',
	},
	{
		name: 'Kinh tế biến đổi khí hậu',
		key: 'KT245',
	},
	{
		name: 'Định giá tài nguyên môi trường',
		key: 'KT246',
	},
	{
		name: 'Kinh tế năng lượng tái tạo',
		key: 'KT247',
	},
	{
		name: 'Kinh tế học ngân hàng',
		key: 'KT249',
	},
	{
		name: 'Kiểm toán hoạt động',
		key: 'KT250',
	},
	{
		name: 'Kiểm toán Nhà nước',
		key: 'KT251',
	},
	{
		name: 'Kinh doanh nông nghiệp',
		key: 'KT253',
	},
	{
		name: 'Khởi sự doanh nghiệp',
		key: 'KT254',
	},
	{
		name: 'Kiến tập Ngoại thương',
		key: 'KT255',
	},
	{
		name: 'Kiến tập ngành Kinh tế nông nghiệp',
		key: 'KT258',
	},
	{
		name: 'Ứng dụng phần mềm trong kế toán',
		key: 'KT260',
	},
	{
		name: 'Thẩm định tín dụng',
		key: 'KT262',
	},
	{
		name: 'Marketing ngân hàng',
		key: 'KT263',
	},
	{
		name: 'Chuyên đề ngân hàng',
		key: 'KT264',
	},
	{
		name: 'Kiến tập ngành ngân hàng',
		key: 'KT265',
	},
	{
		name: 'Định giá tài sản',
		key: 'KT269',
	},
	{
		name: 'Lịch sử các học thuyết kinh tế',
		key: 'KT270',
	},
	{
		name: 'Anh văn chuyên ngành Tài chính - Kế toán',
		key: 'KT275',
	},
	{
		name: 'Phương pháp phân tích định lượng trong quản trị du lịch',
		key: 'KT276',
	},
	{
		name: 'Kinh doanh quốc tế 2',
		key: 'KT280',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Kinh tế',
		key: 'KT290',
	},
	{
		name: 'Tiểu luận tốt nghiệp - QTKD',
		key: 'KT291',
	},
	{
		name: 'Tiểu luận tốt nghiệp - QTDVDLLH',
		key: 'KT292',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Kinh doanh quốc tế',
		key: 'KT294',
	},
	{
		name: 'Tiểu luận tốt nghiệp - TCNH',
		key: 'KT296',
	},
	{
		name: 'Tiểu luận tốt nghiệp kế toán',
		key: 'KT298',
	},
	{
		name: 'Kinh tế vi mô 2',
		key: 'KT301',
	},
	{
		name: 'Kinh tế vĩ mô 2',
		key: 'KT302',
	},
	{
		name: 'Kinh tế quốc tế',
		key: 'KT303',
	},
	{
		name: 'Kinh tế sản xuất',
		key: 'KT304',
	},
	{
		name: 'Hệ thống thông tin kinh tế toàn cầu',
		key: 'KT304H',
	},
	{
		name: 'Kinh tế môi trường',
		key: 'KT305',
	},
	{
		name: 'Đạo đức trong kinh doanh',
		key: 'KT305H',
	},
	{
		name: 'Kinh tế lao động',
		key: 'KT306',
	},
	{
		name: 'Pháp luật về hợp đồng thương mại quốc tế',
		key: 'KT306H',
	},
	{
		name: 'Kinh tế đối ngoại',
		key: 'KT307',
	},
	{
		name: 'Phương pháp nghiên cứu trong kinh doanh quốc tế',
		key: 'KT307H',
	},
	{
		name: 'Quản trị tài chính',
		key: 'KT308',
	},
	{
		name: 'Phân tích chính sách kinh tế',
		key: 'KT310',
	},
	{
		name: 'Kiến tập nghiệp vụ logistics và ngoại thương',
		key: 'KT311H',
	},
	{
		name: 'Kế toán ngân sách',
		key: 'KT315',
	},
	{
		name: 'Kiến tập nghiệp vụ thanh toán quốc tế',
		key: 'KT315H',
	},
	{
		name: 'Kinh doanh quốc tế',
		key: 'KT316',
	},
	{
		name: 'Nghiệp vụ ngoại thương 1',
		key: 'KT317H',
	},
	{
		name: 'Kinh tế nông nghiệp',
		key: 'KT318',
	},
	{
		name: 'Quản trị tài chính trong công ty đa quốc gia',
		key: 'KT318H',
	},
	{
		name: 'Kinh tế tài nguyên',
		key: 'KT319',
	},
	{
		name: 'Nghiên cứu marketing',
		key: 'KT321',
	},
	{
		name: 'Seminar chuyên ngành Kinh doanh quốc tế 2',
		key: 'KT321H',
	},
	{
		name: 'Kế toán quản trị',
		key: 'KT323H',
	},
	{
		name: 'Quản trị marketing',
		key: 'KT324',
	},
	{
		name: 'Nghiên cứu Marketing',
		key: 'KT325H',
	},
	{
		name: 'Thanh toán quốc tế',
		key: 'KT328',
	},
	{
		name: 'Thị trường chứng khoán',
		key: 'KT329',
	},
	{
		name: 'Thuế',
		key: 'KT330',
	},
	{
		name: 'Khởi sự doanh nghiệp',
		key: 'KT330H',
	},
	{
		name: 'Luận văn tốt nghiệp - Kinh tế',
		key: 'KT331',
	},
	{
		name: 'Marketing quốc tế',
		key: 'KT335',
	},
	{
		name: 'Nghiệp vụ ngoại thương',
		key: 'KT336',
	},
	{
		name: 'Thương mại điện tử',
		key: 'KT337',
	},
	{
		name: 'Đầu tư quốc tế',
		key: 'KT338',
	},
	{
		name: 'Kế toán quản trị 1',
		key: 'KT339',
	},
	{
		name: 'Kế toán quản trị 2',
		key: 'KT340',
	},
	{
		name: 'Kế toán tài chính 1',
		key: 'KT341',
	},
	{
		name: 'Kế toán tài chính 2',
		key: 'KT342',
	},
	{
		name: 'Kế toán quốc tế',
		key: 'KT343',
	},
	{
		name: 'Quản trị chất lượng sản phẩm',
		key: 'KT345',
	},
	{
		name: 'Quản trị chiến lược',
		key: 'KT346',
	},
	{
		name: 'Quản trị bán hàng',
		key: 'KT349',
	},
	{
		name: 'Quản trị du lịch và dịch vụ',
		key: 'KT352',
	},
	{
		name: 'Quản trị ngân hàng',
		key: 'KT354',
	},
	{
		name: 'Quản trị quan hệ khách hàng',
		key: 'KT358',
	},
	{
		name: 'Quản trị rủi ro tài chính',
		key: 'KT359',
	},
	{
		name: 'Quản trị sản xuất',
		key: 'KT360',
	},
	{
		name: 'Quản trị thương hiệu',
		key: 'KT361',
	},
	{
		name: 'Quản trị thương mại',
		key: 'KT362',
	},
	{
		name: 'Quản trị văn phòng',
		key: 'KT363',
	},
	{
		name: 'Phân tích và đánh giá tác động môi trường',
		key: 'KT365',
	},
	{
		name: 'Luận văn tốt nghiệp - KDQT',
		key: 'KT367',
	},
	{
		name: 'Hệ thống thông tin kế toán 1',
		key: 'KT370',
	},
	{
		name: 'Hệ thống thông tin kế toán 2',
		key: 'KT371',
	},
	{
		name: 'Kế toán chi phí',
		key: 'KT372',
	},
	{
		name: 'Kế toán hành chính sự nghiệp',
		key: 'KT373',
	},
	{
		name: 'Kế toán ngân hàng',
		key: 'KT374',
	},
	{
		name: 'Kế toán và khai báo thuế',
		key: 'KT375',
	},
	{
		name: 'Kiểm toán 1',
		key: 'KT376',
	},
	{
		name: 'Kiểm toán 2',
		key: 'KT377',
	},
	{
		name: 'Kinh tế du lịch',
		key: 'KT381',
	},
	{
		name: 'Tổ chức thực hiện công tác kế toán',
		key: 'KT383',
	},
	{
		name: 'Tổ chức thực hiện công tác kiểm toán',
		key: 'KT384',
	},
	{
		name: 'Phân tích hoạt động kinh doanh',
		key: 'KT393',
	},
	{
		name: 'Marketing nông nghiệp',
		key: 'KT396',
	},
	{
		name: 'Marketing du lịch',
		key: 'KT397',
	},
	{
		name: 'Luận văn tốt nghiệp - QTKD',
		key: 'KT399',
	},
	{
		name: 'Luận văn tốt nghiệp - KDTM',
		key: 'KT400',
	},
	{
		name: 'Luận văn tốt nghiệp - Marketing',
		key: 'KT401',
	},
	{
		name: 'Luận văn tốt nghiệp - QTDVDLLH',
		key: 'KT402',
	},
	{
		name: 'Kinh tế ô nhiễm và sức khỏe',
		key: 'KT403',
	},
	{
		name: 'Hệ thống kiểm soát nội bộ',
		key: 'KT404',
	},
	{
		name: 'Luận văn tốt nghiệp - TCNH',
		key: 'KT409',
	},
	{
		name: 'Phân tích chính sách nông nghiệp',
		key: 'KT411',
	},
	{
		name: 'Kinh tế vùng',
		key: 'KT413',
	},
	{
		name: 'Luận văn tốt nghiệp - KTNN',
		key: 'KT415',
	},
	{
		name: 'Phân tích lợi ích chi phí',
		key: 'KT418',
	},
	{
		name: 'Thương mại và môi trường',
		key: 'KT419',
	},
	{
		name: 'Luận văn tốt nghiệp - KTTNMT',
		key: 'KT421',
	},
	{
		name: 'Anh văn thương mại 1',
		key: 'KT425',
	},
	{
		name: 'Kỹ thuật đàm phán',
		key: 'KT428',
	},
	{
		name: 'Hành vi khách hàng',
		key: 'KT429',
	},
	{
		name: 'Hành vi tổ chức',
		key: 'KT431',
	},
	{
		name: 'Chuyên đề kế toán',
		key: 'KT434',
	},
	{
		name: 'Chuyên đề Kinh tế học',
		key: 'KT438',
	},
	{
		name: 'Chuyên đề Kinh tế nông nghiệp',
		key: 'KT439',
	},
	{
		name: 'Chuyên đề kinh tế tài nguyên môi trường',
		key: 'KT440',
	},
	{
		name: 'Chuyên đề Marketing',
		key: 'KT441',
	},
	{
		name: 'Chuyên đề Quản trị kinh doanh',
		key: 'KT443',
	},
	{
		name: 'Chuyên đề du lịch và dịch vụ',
		key: 'KT445',
	},
	{
		name: 'Luận văn tốt nghiệp kế toán',
		key: 'KT451',
	},
	{
		name: 'Luận văn tốt nghiệp - Kiểm toán',
		key: 'KT452',
	},
	{
		name: 'Kinh tế sử dụng đất',
		key: 'KT456',
	},
	{
		name: 'Marketing ngân hàng',
		key: 'KT458',
	},
	{
		name: 'Nghiệp vụ ngân hàng cá nhân',
		key: 'KT459',
	},
	{
		name: 'Nghiệp vụ ngân hàng doanh nghiệp',
		key: 'KT460',
	},
	{
		name: 'Nghiệp vụ thanh toán',
		key: 'KT461',
	},
	{
		name: 'Những vấn đề kinh tế nông nghiệp hiện hành',
		key: 'KT463',
	},
	{
		name: 'Phân tích giá trong nông nghiệp',
		key: 'KT465',
	},
	{
		name: 'Seminar Quản trị dịch vụ du lịch và lữ hành',
		key: 'KT469',
	},
	{
		name: 'Tài chính công',
		key: 'KT470',
	},
	{
		name: 'Thống kê trong kinh tế và kinh doanh',
		key: 'KT471',
	},
	{
		name: 'Thực tập kinh doanh xuất nhập khẩu',
		key: 'KT472',
	},
	{
		name: 'Thương mại nông nghiệp quốc tế',
		key: 'KT475',
	},
	{
		name: 'Toán tài chính',
		key: 'KT476',
	},
	{
		name: 'Tổ chức thực hiện công tác kế toán',
		key: 'KT477',
	},
	{
		name: 'Phương pháp nghiên cứu trong kinh doanh',
		key: 'KT479',
	},
	{
		name: 'Phân tích định tính trong kinh doanh',
		key: 'KT480',
	},
	{
		name: 'Phương pháp phân tích trong nghiên cứu du lịch',
		key: 'KT481',
	},
	{
		name: 'Quản trị mua hàng và lưu kho',
		key: 'KT482',
	},
	{
		name: 'Tổ chức sự kiện và lễ hội',
		key: 'KT483',
	},
	{
		name: 'Luận văn tốt nghiệp Kinh doanh quốc tế',
		key: 'KT501H',
	},
	{
		name: 'Tư tưởng Hồ Chí Minh',
		key: 'ML006',
	},
	{
		name: 'Logic học đại cương',
		key: 'ML007',
	},
	{
		name: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 1',
		key: 'ML009',
	},
	{
		name: 'Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 2',
		key: 'ML010',
	},
	{
		name: 'Đường lối cách mạng của Đảng cộng sản Việt Nam',
		key: 'ML011',
	},
	{
		name: 'Triết học Mác - Lênin',
		key: 'ML014',
	},
	{
		name: 'Triết học Mác - Lênin',
		key: 'ML015',
	},
	{
		name: 'Kinh tế chính trị Mác - Lênin',
		key: 'ML016',
	},
	{
		name: 'Kinh tế chính trị Mác - Lênin',
		key: 'ML017',
	},
	{
		name: 'Chủ nghĩa xã hội khoa học',
		key: 'ML018',
	},
	{
		name: 'Lịch sử Đảng Cộng sản Việt Nam',
		key: 'ML019',
	},
	{
		name: 'Tư tưởng Hồ Chí Minh',
		key: 'ML021',
	},
	{
		name: 'Lịch sử các học thuyết kinh tế',
		key: 'ML104',
	},
	{
		name: 'Tập giảng - GDCD',
		key: 'ML110',
	},
	{
		name: 'Lịch sử phong trào cộng sản và công nhân quốc tế',
		key: 'ML112',
	},
	{
		name: 'Triết học trong khoa học tự nhiên',
		key: 'ML123',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong dạy học Giáo dục công dân',
		key: 'ML131',
	},
	{
		name: 'Lịch sử tư tưởng chính trị Việt Nam',
		key: 'ML135',
	},
	{
		name: 'Anh văn chuyên môn khoa học lý luận chính trị 1',
		key: 'ML198',
	},
	{
		name: 'Chính sách dân tộc của Đảng và Nhà nước Việt Nam',
		key: 'ML202',
	},
	{
		name: 'Chuyên đề Triết học Mác-Lênin',
		key: 'ML207',
	},
	{
		name: 'Học thuyết chính trị Mác-Lênin',
		key: 'ML208',
	},
	{
		name: 'Lịch sử triết học Ấn Độ - cổ trung đại',
		key: 'ML210',
	},
	{
		name: 'Lịch sử triết học cổ điển Đức',
		key: 'ML211',
	},
	{
		name: 'Lịch sử triết học Hy Lạp - La Mã cổ đại',
		key: 'ML212',
	},
	{
		name: 'Lịch sử triết học Tây Âu thời kỳ phục hưng và cận đại',
		key: 'ML213',
	},
	{
		name: 'Chuyên đề kinh tế chính trị Mác-Lênin',
		key: 'ML217',
	},
	{
		name: 'Chuyên đề Chủ nghĩa xã hội khoa học',
		key: 'ML221',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học lý luận chính trị',
		key: 'ML223',
	},
	{
		name: 'Thống kê cho khoa học xã hội',
		key: 'ML226',
	},
	{
		name: 'Niên luận Triết học Mác-Lênin',
		key: 'ML229',
	},
	{
		name: 'Tư tưởng chính trị Hồ Chí Minh',
		key: 'ML233',
	},
	{
		name: 'Niên luận Triết học duy vật biện chứng',
		key: 'ML240',
	},
	{
		name: 'Niên luận Triết học duy vật lịch sử',
		key: 'ML241',
	},
	{
		name: 'Công dân và pháp luật',
		key: 'ML301',
	},
	{
		name: 'Đạo đức học',
		key: 'ML312',
	},
	{
		name: 'Những vấn đề thời đại ngày nay',
		key: 'ML316',
	},
	{
		name: 'Xây dựng Đảng',
		key: 'ML319',
	},
	{
		name: 'Lịch sử tư tưởng triết học Việt Nam',
		key: 'ML345',
	},
	{
		name: 'Logic biện chứng',
		key: 'ML346',
	},
	{
		name: 'Phương pháp giảng dạy triết học',
		key: 'ML348',
	},
	{
		name: 'Chuyên đề chủ nghĩa duy vật biện chứng',
		key: 'ML349',
	},
	{
		name: 'Chuyên đề lý luận hình thái kinh tế - xã hội',
		key: 'ML351',
	},
	{
		name: 'Tư tưởng triết học Hồ Chí Minh',
		key: 'ML352',
	},
	{
		name: 'Chuyên đề triết học về con người',
		key: 'ML353',
	},
	{
		name: 'Tác phẩm kinh điển triết học Mác - Lênin',
		key: 'ML354',
	},
	{
		name: 'Chuyên đề lý luận Nhà nước và Pháp luật',
		key: 'ML355',
	},
	{
		name: 'Niên luận Triết học',
		key: 'ML356',
	},
	{
		name: 'Chính trị học',
		key: 'ML358',
	},
	{
		name: 'Khoa học quản lý',
		key: 'ML360',
	},
	{
		name: 'Phương pháp tiếp cận và xử lý tình huống chính trị',
		key: 'ML361',
	},
	{
		name: 'Phương pháp giảng dạy chính trị học',
		key: 'ML362',
	},
	{
		name: 'Chính trị Việt Nam trong thời kỳ quá độ lên Chủ nghĩa xã hội',
		key: 'ML365',
	},
	{
		name: 'Đảng Chính trị',
		key: 'ML367',
	},
	{
		name: 'Quyết sách chính trị',
		key: 'ML368',
	},
	{
		name: 'Kinh điển chính trị học',
		key: 'ML370',
	},
	{
		name: 'Niên luận chính trị học',
		key: 'ML371',
	},
	{
		name: 'Chính sách đối ngoại của Đảng và Nhà nước ta hiện nay',
		key: 'ML372',
	},
	{
		name: 'Luận văn tốt nghiệp - Chính trị học',
		key: 'ML374',
	},
	{
		name: 'Đại cương chính trị học so sánh',
		key: 'ML376',
	},
	{
		name: 'Luận văn tốt nghiệp - Triết học',
		key: 'ML401',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Triết học',
		key: 'ML402',
	},
	{
		name: 'Virus học đại cương',
		key: 'MM413C',
	},
	{
		name: 'TT. Virus học đại cương',
		key: 'MM414C',
	},
	{
		name: 'Sinh thái học cơ bản',
		key: 'MT101',
	},
	{
		name: 'Luật và chính sách môi trường',
		key: 'MT103',
	},
	{
		name: 'Địa chất môi trường',
		key: 'MT105',
	},
	{
		name: 'Cơ sở khoa học môi trường',
		key: 'MT107',
	},
	{
		name: 'Hệ sinh thái nông nghiệp',
		key: 'MT110',
	},
	{
		name: 'Quan trắc môi trường',
		key: 'MT119',
	},
	{
		name: 'Năng lượng và môi trường',
		key: 'MT123',
	},
	{
		name: 'Anh văn chuyên môn Kỹ thuật môi trường',
		key: 'MT124',
	},
	{
		name: 'Dân số, sức khỏe và môi trường',
		key: 'MT125',
	},
	{
		name: 'Anh văn chuyên môn quản lý môi trường',
		key: 'MT132',
	},
	{
		name: 'Quản lý tài nguyên đất đai',
		key: 'MT145',
	},
	{
		name: 'Quản lý tài nguyên rừng',
		key: 'MT146',
	},
	{
		name: 'Hóa môi trường ứng dụng',
		key: 'MT150',
	},
	{
		name: 'Thống kê phép thí nghiệm - MT',
		key: 'MT152',
	},
	{
		name: 'Trắc địa đại cương',
		key: 'MT155',
	},
	{
		name: 'Nông nghiệp đô thị',
		key: 'MT157',
	},
	{
		name: 'Quản lý đô thị',
		key: 'MT158',
	},
	{
		name: 'Báo cáo chuyên đề kỹ thuật môi trường',
		key: 'MT160',
	},
	{
		name: 'Quá trình và thiết bị trong kỹ thuật môi trường',
		key: 'MT162',
	},
	{
		name: 'Quản lý và sử dụng tiết kiệm năng lượng',
		key: 'MT165',
	},
	{
		name: 'Mô hình hóa môi trường',
		key: 'MT182',
	},
	{
		name: 'Đo đạc địa chính',
		key: 'MT197',
	},
	{
		name: 'Tin học trong kỹ thuật môi trường',
		key: 'MT198',
	},
	{
		name: 'Anh văn chuyên ngành tài nguyên và môi trường',
		key: 'MT199',
	},
	{
		name: 'Đánh giá rủi ro môi trường',
		key: 'MT201',
	},
	{
		name: 'Năng lượng tái tạo',
		key: 'MT206',
	},
	{
		name: 'Biến đổi khí hậu và ứng phó',
		key: 'MT209',
	},
	{
		name: 'Phục hồi sinh thái',
		key: 'MT210',
	},
	{
		name: 'Luật và chính sách môi trường',
		key: 'MT211',
	},
	{
		name: 'Quản lý nhà nước về đất đai',
		key: 'MT220',
	},
	{
		name: 'Quy hoạch phát triển vùng và đô thị',
		key: 'MT221',
	},
	{
		name: 'Phát triển bền vững tài nguyên đất đai',
		key: 'MT222',
	},
	{
		name: 'Mô hình hóa trong quản lý đất đai',
		key: 'MT223',
	},
	{
		name: 'Đồ họa và thiết kế cảnh quan đô thị',
		key: 'MT224',
	},
	{
		name: 'Kỹ năng chuyên ngành',
		key: 'MT225',
	},
	{
		name: 'Quản lý và giảm nhẹ thiên tai',
		key: 'MT228',
	},
	{
		name: 'Kinh tế tài nguyên đất đai',
		key: 'MT229',
	},
	{
		name: 'Phân tích sinh kế trong thay đổi sử dụng đất',
		key: 'MT231',
	},
	{
		name: 'Quản lý và xử lý chất thải rắn',
		key: 'MT233',
	},
	{
		name: 'TT. Công trình xử lý môi trường',
		key: 'MT234',
	},
	{
		name: 'Chuyển hóa và lan truyền ô nhiễm',
		key: 'MT239',
	},
	{
		name: 'An toàn, sức khỏe và môi trường',
		key: 'MT245',
	},
	{
		name: 'Công nghệ sinh học trong môi trường',
		key: 'MT248',
	},
	{
		name: 'Hệ thống thông tin địa lý và định vị toàn cầu (GIS-GPS)',
		key: 'MT266',
	},
	{
		name: 'Thực tập ngành nghề - TNN',
		key: 'MT282',
	},
	{
		name: 'Anh văn chuyên môn - TNN',
		key: 'MT283',
	},
	{
		name: 'Quản lý môi trường',
		key: 'MT311',
	},
	{
		name: 'Bảo tồn đa dạng sinh học',
		key: 'MT312',
	},
	{
		name: 'Tài nguyên thủy sinh vật',
		key: 'MT315',
	},
	{
		name: 'Phát triển bền vững',
		key: 'MT319',
	},
	{
		name: 'Quản lý môi trường đô thị và khu công nghiệp',
		key: 'MT323',
	},
	{
		name: 'Quản lý đất ngập nước',
		key: 'MT324',
	},
	{
		name: 'Đánh giá chất lượng đất, nước, không khí',
		key: 'MT328',
	},
	{
		name: 'TT. Đánh giá chất lượng đất, nước, không khí',
		key: 'MT329',
	},
	{
		name: 'Xã hội và môi trường',
		key: 'MT332',
	},
	{
		name: 'Quản lý tài nguyên trên cơ sở phát triển cộng đồng',
		key: 'MT334',
	},
	{
		name: 'Kỹ thuật xử lý nước thải',
		key: 'MT338',
	},
	{
		name: 'TT. Kỹ thuật xử lý nước thải',
		key: 'MT339',
	},
	{
		name: 'Luận văn tốt nghiệp - KHMT',
		key: 'MT341',
	},
	{
		name: 'Đánh giá tác động môi trường',
		key: 'MT342',
	},
	{
		name: 'Quản lý và xử lý chất thải độc hại',
		key: 'MT346',
	},
	{
		name: 'Quản lý và xử lý chất thải rắn',
		key: 'MT350',
	},
	{
		name: 'TT. Xử lý chất thải rắn',
		key: 'MT351',
	},
	{
		name: 'Công trình xử lý môi trường',
		key: 'MT353',
	},
	{
		name: 'Công nghệ sạch',
		key: 'MT357',
	},
	{
		name: 'Quy hoạch môi trường',
		key: 'MT358',
	},
	{
		name: 'Quản lý kỹ thuật',
		key: 'MT360',
	},
	{
		name: 'Quản lý và tái sử dụng chất thải hữu cơ',
		key: 'MT361',
	},
	{
		name: 'Ứng dụng GIS trong quản lý môi trường',
		key: 'MT362',
	},
	{
		name: 'Quản lý và vận hành công trình xử lý môi trường',
		key: 'MT365',
	},
	{
		name: 'Quản lý môi trường nông nghiệp',
		key: 'MT366',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KTMT',
		key: 'MT368',
	},
	{
		name: 'Luận văn tốt nghiệp - KTMT',
		key: 'MT369',
	},
	{
		name: 'TT. Đánh giá tác động môi trường',
		key: 'MT370',
	},
	{
		name: 'Kiểm soát ô nhiễm không khí và tiếng Ồn',
		key: 'MT373',
	},
	{
		name: 'Thực tập ngành nghề - QLMT',
		key: 'MT375',
	},
	{
		name: 'Niên luận Môi trường',
		key: 'MT388',
	},
	{
		name: 'Đồ án xử lý ô nhiễm không khí',
		key: 'MT390',
	},
	{
		name: 'Đồ án xử lý nước cấp và nước thải',
		key: 'MT391',
	},
	{
		name: 'Đồ án quản lý và xử lý chất thải rắn',
		key: 'MT392',
	},
	{
		name: 'Đồ án công trình xử lý môi trường',
		key: 'MT393',
	},
	{
		name: 'Tiểu luận tốt nghiệp - QLMT',
		key: 'MT396',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KHMT',
		key: 'MT399',
	},
	{
		name: 'Báo cáo chuyên đề - QLMT',
		key: 'MT405',
	},
	{
		name: 'Ô nhiễm và kiểm soát ô nhiễm',
		key: 'MT409',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học TN&MT',
		key: 'MT418',
	},
	{
		name: 'Quy hoạch sử dụng đất',
		key: 'MT419',
	},
	{
		name: 'Vật liệu môi trường',
		key: 'MT420',
	},
	{
		name: 'Vi sinh môi trường',
		key: 'MT421',
	},
	{
		name: 'TT. Vi sinh học môi trường',
		key: 'MT422',
	},
	{
		name: 'Thực tập phân tích và đánh giá chất lượng môi trường đất',
		key: 'MT426',
	},
	{
		name: 'Thực tập phân tích và đánh giá chất lượng môi trường nước',
		key: 'MT427',
	},
	{
		name: 'TT. Hóa môi trường ứng dụng',
		key: 'MT431',
	},
	{
		name: 'Đồ họa chuyên ngành - KTMT',
		key: 'MT442',
	},
	{
		name: 'Đồ họa chuyên ngành - QLMT',
		key: 'MT444',
	},
	{
		name: 'TT. Xử lý chất thải rắn và khí thái',
		key: 'MT445',
	},
	{
		name: 'TT. Quan trắc môi trường',
		key: 'MT446',
	},
	{
		name: 'TT. Đánh giá tác động môi trường',
		key: 'MT447',
	},
	{
		name: 'Luận văn tốt nghiệp - KTTNN',
		key: 'MT450',
	},
	{
		name: 'Luận văn tốt nghiệp - QLMT',
		key: 'MT504',
	},
	{
		name: 'Kỹ năng mềm',
		key: 'NN100',
	},
	{
		name: 'Chọn giống gia súc',
		key: 'NN101',
	},
	{
		name: 'Di truyền học động vật',
		key: 'NN103',
	},
	{
		name: 'Dinh dưỡng gia súc',
		key: 'NN104',
	},
	{
		name: 'Sinh lý gia súc',
		key: 'NN105',
	},
	{
		name: 'Thức ăn gia súc',
		key: 'NN107',
	},
	{
		name: 'Tổ chức học động vật',
		key: 'NN108',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - Nông nghiệp',
		key: 'NN111',
	},
	{
		name: 'Miễn dịch học',
		key: 'NN112',
	},
	{
		name: 'Tin học ứng dụng - CNTY',
		key: 'NN114',
	},
	{
		name: 'Vi sinh trong chăn nuôi',
		key: 'NN118',
	},
	{
		name: 'Anh văn chuyên môn - Thú y',
		key: 'NN120',
	},
	{
		name: 'Giải phẩu bệnh lý',
		key: 'NN121',
	},
	{
		name: 'Sinh hóa B',
		key: 'NN123',
	},
	{
		name: 'TT. Sinh hóa',
		key: 'NN124',
	},
	{
		name: 'Nhiệt kỹ thuật',
		key: 'NN125',
	},
	{
		name: 'Di truyền học đại cương',
		key: 'NN126',
	},
	{
		name: 'TT. Di truyền học đại cương',
		key: 'NN127',
	},
	{
		name: 'Sinh lý thực vật A',
		key: 'NN128',
	},
	{
		name: 'Sinh lý thực vật B',
		key: 'NN129',
	},
	{
		name: 'TT. Sinh lý thực vật',
		key: 'NN130',
	},
	{
		name: 'Thổ nhưỡng B',
		key: 'NN131',
	},
	{
		name: 'Anh văn chuyên môn - KHCT',
		key: 'NN134',
	},
	{
		name: 'Anh văn chuyên môn giống cây trồng',
		key: 'NN135',
	},
	{
		name: 'Hóa bảo vệ thực vật A',
		key: 'NN138',
	},
	{
		name: 'Chăn nuôi đại cương',
		key: 'NN139',
	},
	{
		name: 'Trồng trọt đại cương',
		key: 'NN140',
	},
	{
		name: 'Anh văn chuyên môn hoa viên và cây cảnh',
		key: 'NN142',
	},
	{
		name: 'Hóa bảo vệ thực vật B',
		key: 'NN143',
	},
	{
		name: 'Hóa học thực phẩm',
		key: 'NN144',
	},
	{
		name: 'TT. Hóa học thực phẩm',
		key: 'NN145',
	},
	{
		name: 'Phụ gia trong chế biến thực phẩm',
		key: 'NN151',
	},
	{
		name: 'Thống kê phép thí nghiệm - CNTP',
		key: 'NN153',
	},
	{
		name: 'Hình họa và vẽ kỹ thuật',
		key: 'NN155',
	},
	{
		name: 'Tin học ứng dụng - CNTP',
		key: 'NN157',
	},
	{
		name: 'Anh văn chuyên ngành - CNTP',
		key: 'NN158',
	},
	{
		name: 'Anh văn chuyên ngành khoa học đất',
		key: 'NN161',
	},
	{
		name: 'Đồ án Kỹ thuật thực phẩm',
		key: 'NN164',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - CNTP',
		key: 'NN165',
	},
	{
		name: 'An toàn và ô nhiễm trong sản xuất thực phẩm',
		key: 'NN166',
	},
	{
		name: 'Nước cấp, nước thải kỹ nghệ',
		key: 'NN167',
	},
	{
		name: 'Xác suất thống kê và phép thí nghiệm - CNTY',
		key: 'NN172',
	},
	{
		name: 'Dược lý thú y',
		key: 'NN173',
	},
	{
		name: 'Sinh lý bệnh thú y',
		key: 'NN174',
	},
	{
		name: 'Trắc địa đại cương',
		key: 'NN175',
	},
	{
		name: 'Quản lý và khai thác tài nguyên đất đai',
		key: 'NN176',
	},
	{
		name: 'Côn trùng đại cương',
		key: 'NN178',
	},
	{
		name: 'Nguyên lý bảo quản và chế biến thực phẩm',
		key: 'NN180',
	},
	{
		name: 'Xác suất thống kê và phép thí nghiệm - KHCT',
		key: 'NN184',
	},
	{
		name: 'Dinh dưỡng cây trồng',
		key: 'NN185',
	},
	{
		name: 'Cây lúa',
		key: 'NN186',
	},
	{
		name: 'Rèn nghề',
		key: 'NN194',
	},
	{
		name: 'Thực tập giáo trình - KHCT',
		key: 'NN195',
	},
	{
		name: 'Chọn giống cây công nghiệp ngắn ngày',
		key: 'NN196',
	},
	{
		name: 'Dinh dưỡng người',
		key: 'NN207',
	},
	{
		name: 'Công nghệ chế biến sữa và sản phẩm sữa',
		key: 'NN217',
	},
	{
		name: 'Công nghệ chế biến thủy và hải sản',
		key: 'NN219',
	},
	{
		name: 'Bao bì thực phẩm',
		key: 'NN226',
	},
	{
		name: 'Luận văn tốt nghiệp - CNTP',
		key: 'NN229',
	},
	{
		name: 'Thổ nhưỡng A',
		key: 'NN230',
	},
	{
		name: 'Phì nhiêu đất',
		key: 'NN232',
	},
	{
		name: 'Kỹ thuật bản đồ địa chính',
		key: 'NN243',
	},
	{
		name: 'Quản lý thông tin đất đai LIS-LIM',
		key: 'NN250',
	},
	{
		name: 'Quy hoạch và phát triển nông thôn',
		key: 'NN255',
	},
	{
		name: 'Lưu trữ và quản lý hồ sơ địa chính',
		key: 'NN257',
	},
	{
		name: 'Phân hạng và định giá đất',
		key: 'NN259',
	},
	{
		name: 'Kiểm kê và chỉnh lý biến động đất đai',
		key: 'NN262',
	},
	{
		name: 'Luận văn tốt nghiệp - QLĐĐ',
		key: 'NN275',
	},
	{
		name: 'Nguồn gốc và phân loại đất',
		key: 'NN276',
	},
	{
		name: 'Nông nghiệp sạch và bền vững',
		key: 'NN286',
	},
	{
		name: 'Viễn thám đại cương',
		key: 'NN288',
	},
	{
		name: 'Luận văn tốt nghiệp - KHD',
		key: 'NN293',
	},
	{
		name: 'Luận văn tốt nghiệp - Nông nghiệp sạch',
		key: 'NN295',
	},
	{
		name: 'Công nghệ chế biến chè, cà phê, ca cao',
		key: 'NN296',
	},
	{
		name: 'Viễn thám ứng dụng',
		key: 'NN298',
	},
	{
		name: 'Quản lý và phân tích thị trường bất động sản',
		key: 'NN299',
	},
	{
		name: 'Sản khoa và gieo tinh nhân tạo',
		key: 'NN301',
	},
	{
		name: 'Nội khoa gia súc B',
		key: 'NN302',
	},
	{
		name: 'Dịch tễ học',
		key: 'NN303',
	},
	{
		name: 'Bệnh dinh dưỡng',
		key: 'NN304',
	},
	{
		name: 'Chăn nuôi gia cầm A',
		key: 'NN305',
	},
	{
		name: 'Chăn nuôi gia súc nhai lại A',
		key: 'NN306',
	},
	{
		name: 'Chăn nuôi heo A',
		key: 'NN307',
	},
	{
		name: 'Quản lý sản xuất chăn nuôi',
		key: 'NN309',
	},
	{
		name: 'Chăn nuôi chó, mèo',
		key: 'NN310',
	},
	{
		name: 'Bệnh ký sinh gia súc',
		key: 'NN311',
	},
	{
		name: 'Bệnh truyền nhiễm',
		key: 'NN312',
	},
	{
		name: 'Nuôi động vật thí nghiệm',
		key: 'NN317',
	},
	{
		name: 'Vệ sinh môi trường chăn nuôi',
		key: 'NN318',
	},
	{
		name: 'Xây dựng chuồng trại',
		key: 'NN320',
	},
	{
		name: 'Luật Thú y',
		key: 'NN323',
	},
	{
		name: 'Vệ sinh Thú y',
		key: 'NN324',
	},
	{
		name: 'Hệ thống chăn nuôi',
		key: 'NN325',
	},
	{
		name: 'Khuyến nông',
		key: 'NN326',
	},
	{
		name: 'Luận văn tốt nghiệp - CNTY',
		key: 'NN330',
	},
	{
		name: 'Bệnh truyền nhiễm gia súc và gia cầm',
		key: 'NN331',
	},
	{
		name: 'Bệnh ký sinh gia súc và gia cầm',
		key: 'NN333',
	},
	{
		name: 'Bệnh thú hoang dã',
		key: 'NN335',
	},
	{
		name: 'Chăn nuôi dê',
		key: 'NN336',
	},
	{
		name: 'Chăn nuôi gia cầm B',
		key: 'NN337',
	},
	{
		name: 'Chăn nuôi gia súc nhai lại B',
		key: 'NN338',
	},
	{
		name: 'Chăn nuôi heo B',
		key: 'NN339',
	},
	{
		name: 'Độc chất học thú y',
		key: 'NN341',
	},
	{
		name: 'Quản lý dịch bệnh trên đàn gia súc',
		key: 'NN344',
	},
	{
		name: 'Sản khoa gia súc',
		key: 'NN345',
	},
	{
		name: 'Thụ tinh nhân tạo',
		key: 'NN346',
	},
	{
		name: 'Luận văn tốt nghiệp - Thú y',
		key: 'NN351',
	},
	{
		name: 'Dinh dưỡng và thức ăn gia súc',
		key: 'NN353',
	},
	{
		name: 'Công nghệ hạt giống',
		key: 'NN357',
	},
	{
		name: 'Bệnh cây trồng',
		key: 'NN359',
	},
	{
		name: 'Cây ăn trái',
		key: 'NN361',
	},
	{
		name: 'Cây công nghiệp ngắn ngày',
		key: 'NN363',
	},
	{
		name: 'Luật cây trồng',
		key: 'NN367',
	},
	{
		name: 'Kiểm định hạt giống',
		key: 'NN368',
	},
	{
		name: 'Cây lúa',
		key: 'NN369',
	},
	{
		name: 'Cây màu',
		key: 'NN370',
	},
	{
		name: 'Cây rau',
		key: 'NN371',
	},
	{
		name: 'Chọn giống cây trồng',
		key: 'NN373',
	},
	{
		name: 'Công nghệ sinh học trong nông nghiệp',
		key: 'NN375',
	},
	{
		name: 'Dinh dưỡng cây trồng',
		key: 'NN376',
	},
	{
		name: 'Hệ thống canh tác',
		key: 'NN377',
	},
	{
		name: 'Luận văn tốt nghiệp - Giống CT',
		key: 'NN379',
	},
	{
		name: 'Kỹ thuật sản xuất rau sạch',
		key: 'NN380',
	},
	{
		name: 'Nhân giống vô tính',
		key: 'NN382',
	},
	{
		name: 'Sản xuất cây trồng qui mô trang trại',
		key: 'NN389',
	},
	{
		name: 'Thực hành nông nghiệp tốt (GAP)',
		key: 'NN390',
	},
	{
		name: 'Luận văn tốt nghiệp - Giống vật nuôi',
		key: 'NN397',
	},
	{
		name: 'Xử lý ra hoa',
		key: 'NN401',
	},
	{
		name: 'Luận văn tốt nghiệp - KHCT',
		key: 'NN402',
	},
	{
		name: 'Luận văn tốt nghiệp - Nông học',
		key: 'NN403',
	},
	{
		name: 'Cỏ dại',
		key: 'NN414',
	},
	{
		name: 'TT. Cỏ dại',
		key: 'NN415',
	},
	{
		name: 'Động vật hại trong nông nghiệp',
		key: 'NN416',
	},
	{
		name: 'TT. Động vật hại nông nghiệp',
		key: 'NN417',
	},
	{
		name: 'Thực tập giáo trình - BVTV',
		key: 'NN420',
	},
	{
		name: 'Ứng dụng GIS và viễn thám trong BVTV',
		key: 'NN425',
	},
	{
		name: 'Vi sinh vật và chuyển hóa vật chất trong đất',
		key: 'NN428',
	},
	{
		name: 'Bệnh sau thu hoạch',
		key: 'NN434',
	},
	{
		name: 'Côn trùng trong kho vựa',
		key: 'NN435',
	},
	{
		name: 'Luận văn tốt nghiệp - BVTV',
		key: 'NN436',
	},
	{
		name: 'Côn trùng - HV và CC',
		key: 'NN438',
	},
	{
		name: 'Bệnh cây - HV và CC',
		key: 'NN439',
	},
	{
		name: 'Sinh học phân tử cây trồng',
		key: 'NN442',
	},
	{
		name: 'Phương pháp thủy canh',
		key: 'NN451',
	},
	{
		name: 'Luận văn tốt nghiệp - RHQ&CQ',
		key: 'NN463',
	},
	{
		name: 'Quản lý dịch hại rau hoa quả',
		key: 'NN473',
	},
	{
		name: 'Luận văn tốt nghiệp - Lâm sinh',
		key: 'NN488',
	},
	{
		name: 'Thực hành chăn nuôi tốt (GAHP)',
		key: 'NN492',
	},
	{
		name: 'Quyền lợi và tập tính học động vật',
		key: 'NN499',
	},
	{
		name: 'Công nghệ sinh học trong bảo vệ thực vật',
		key: 'NN513',
	},
	{
		name: 'Kỹ thuật trồng hoa và cây cảnh',
		key: 'NN518',
	},
	{
		name: 'Phong thủy',
		key: 'NN521',
	},
	{
		name: 'Dinh dưỡng hoa và cây cảnh',
		key: 'NN522',
	},
	{
		name: 'Phì nhiêu đất B',
		key: 'NN529',
	},
	{
		name: 'Dược liệu',
		key: 'NN533',
	},
	{
		name: 'Luận văn tốt nghiệp - Dược TY',
		key: 'NN537',
	},
	{
		name: 'Dinh dưỡng gia súc',
		key: 'NN547',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học nông nghiệp - CNTY',
		key: 'NN549',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KHCT',
		key: 'NN551',
	},
	{
		name: 'Tiểu luận tốt nghiệp - KHD',
		key: 'NN554',
	},
	{
		name: 'Tiểu luận tốt nghiêp - CNTY',
		key: 'NN556',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Dược TY',
		key: 'NN558',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Thú y',
		key: 'NN560',
	},
	{
		name: 'Tiểu luận tốt nghiệp - RHQ&CQ',
		key: 'NN561',
	},
	{
		name: 'Kỹ thuật cắm hoa và trình bày mâm trái cây',
		key: 'NN567',
	},
	{
		name: 'Luận văn tốt nghiệp - Thú y',
		key: 'NN572',
	},
	{
		name: 'Bệnh cây đại cương',
		key: 'NS105',
	},
	{
		name: 'Kỹ thuật các quá trình sinh học trong chế biến thực phẩm',
		key: 'NS114',
	},
	{
		name: 'Miễn dịch học',
		key: 'NS119',
	},
	{
		name: 'Kiểm nghiệm sản phẩm động vật',
		key: 'NS120',
	},
	{
		name: 'Hóa học thực phẩm',
		key: 'NS124H',
	},
	{
		name: 'Vi sinh thực phẩm',
		key: 'NS125H',
	},
	{
		name: 'An toàn và ô nhiễm trong sản xuất thực phẩm',
		key: 'NS128H',
	},
	{
		name: 'Các quá trình truyền khối',
		key: 'NS129H',
	},
	{
		name: 'Lý thuyết điều khiển tự động trong CNTP',
		key: 'NS134',
	},
	{
		name: 'Máy và thiết bị chế biến thực phẩm',
		key: 'NS136',
	},
	{
		name: 'Kỹ thuật phân tích hiện đại trong CNTP',
		key: 'NS140',
	},
	{
		name: 'Hình họa và vẽ kỹ thuật - CNTP',
		key: 'NS143',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học nông nghiệp - TY',
		key: 'NS197',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học và thống kê phép thí nghiệm',
		key: 'NS198',
	},
	{
		name: 'Khía cạnh Xã hội của Công nghệ Sinh học trong nông nghiệp',
		key: 'NS199',
	},
	{
		name: 'Kỹ thuật IoTs và ứng dụng',
		key: 'NS200',
	},
	{
		name: 'TT. Chất điều hòa sinh trưởng thực vật',
		key: 'NS202',
	},
	{
		name: 'Nuôi cấy mô thực vật ứng dụng',
		key: 'NS203',
	},
	{
		name: 'TT. Nuôi cấy mô thực vật Ứng dụng',
		key: 'NS204',
	},
	{
		name: 'Anh văn chuyên môn-SHƯD',
		key: 'NS210',
	},
	{
		name: 'Thiết bị thu hoạch và bảo quản nông sản',
		key: 'NS213',
	},
	{
		name: 'Xử lý và tồn trữ lạnh nông sản',
		key: 'NS221',
	},
	{
		name: 'Bệnh chó, mèo',
		key: 'NS229',
	},
	{
		name: 'Các quá trình hóa lý trong công nghệ thực phẩm',
		key: 'NS231',
	},
	{
		name: 'Các quá trình và thiết bị cơ bản trong bảo quản và chế biến thực phẩm 1',
		key: 'NS232',
	},
	{
		name: 'Chẩn đoán thú y',
		key: 'NS234',
	},
	{
		name: 'Côn trùng gây hại sau thu hoạch',
		key: 'NS238',
	},
	{
		name: 'Công nghệ sản xuất phân bón cơ bản',
		key: 'NS242',
	},
	{
		name: 'Đánh giá cảm quan và thị hiếu người tiêu dùng',
		key: 'NS248',
	},
	{
		name: 'Điện kỹ thuật',
		key: 'NS250',
	},
	{
		name: 'Luật chăn nuôi - thú y',
		key: 'NS260',
	},
	{
		name: 'Nông nghiệp công nghệ cao',
		key: 'NS264',
	},
	{
		name: 'Quản lý chuỗi sản xuất thực phẩm',
		key: 'NS269',
	},
	{
		name: 'Quản lý dịch bệnh trên động vật và Một sức khỏe',
		key: 'NS270',
	},
	{
		name: 'Sinh hoạt học thuật ngành nghề',
		key: 'NS275',
	},
	{
		name: 'Sinh học động vật',
		key: 'NS276',
	},
	{
		name: 'Sinh học phân tử',
		key: 'NS277',
	},
	{
		name: 'Thiết bị và dụng cụ thú y',
		key: 'NS279',
	},
	{
		name: 'Thực tập giáo trình - chăn nuôi',
		key: 'NS283',
	},
	{
		name: 'Bệnh hại cây trồng 1',
		key: 'NS293',
	},
	{
		name: 'Vi sinh thú y',
		key: 'NS295',
	},
	{
		name: 'Vi sinh trong Chăn nuôi - Thú y',
		key: 'NS296',
	},
	{
		name: 'Phụ gia trong chế biến thực phẩm',
		key: 'NS300H',
	},
	{
		name: 'Côn trùng hại cây trồng 1',
		key: 'NS301',
	},
	{
		name: 'Bệnh hại cây trồng 1',
		key: 'NS302',
	},
	{
		name: 'Phân tích cảm quan và thị hiếu người tiêu dùng',
		key: 'NS302H',
	},
	{
		name: 'IPM trong bảo vệ thực vật 1',
		key: 'NS304',
	},
	{
		name: 'Kỹ thuật lạnh thực phẩm',
		key: 'NS305H',
	},
	{
		name: 'Kiểm dịch TV và dịch hại sau thu hoạch',
		key: 'NS306',
	},
	{
		name: 'Kỹ thuật lên men thực phẩm',
		key: 'NS306H',
	},
	{
		name: 'Tuyến trùng nông nghiệp',
		key: 'NS307',
	},
	{
		name: 'Dinh dưỡng người',
		key: 'NS307H',
	},
	{
		name: 'Virút hại thực vật',
		key: 'NS310',
	},
	{
		name: 'Anh văn chuyên môn - BVTV',
		key: 'NS311',
	},
	{
		name: 'Kỹ năng giao tiếp trong nông nghiệp',
		key: 'NS313',
	},
	{
		name: 'Hóa học thực phẩm',
		key: 'NS318',
	},
	{
		name: 'Vi sinh thực phẩm',
		key: 'NS319',
	},
	{
		name: 'Mô học động vật',
		key: 'NS320',
	},
	{
		name: 'Kỹ thuật chế biến nhiệt thực phẩm',
		key: 'NS323',
	},
	{
		name: 'Kỹ thuật lạnh thực phẩm',
		key: 'NS324',
	},
	{
		name: 'Kỹ thuật lên men thực phẩm',
		key: 'NS326',
	},
	{
		name: 'Quản lý chất lượng và luật thực phẩm',
		key: 'NS328',
	},
	{
		name: 'Ngoại khoa gia súc',
		key: 'NS329',
	},
	{
		name: 'Công nghệ chế biến đường - Bánh kẹo',
		key: 'NS330',
	},
	{
		name: 'Công nghệ chế biến gạo và sản phẩm từ gạo',
		key: 'NS332',
	},
	{
		name: 'Thực phẩm chức năng',
		key: 'NS335',
	},
	{
		name: 'Phát triển sản phẩm mới',
		key: 'NS336',
	},
	{
		name: 'Chuỗi giá trị thực phẩm',
		key: 'NS342',
	},
	{
		name: 'Anh văn chuyên môn - CNTY',
		key: 'NS343',
	},
	{
		name: 'Niên luận - CNTY',
		key: 'NS345',
	},
	{
		name: 'Nội khoa gia súc',
		key: 'NS349',
	},
	{
		name: 'Niên luận - TY',
		key: 'NS354',
	},
	{
		name: 'Đồ họa ứng dụng trong thiết kế cảnh quan',
		key: 'NS366',
	},
	{
		name: 'Nội khoa gia súc',
		key: 'NS370',
	},
	{
		name: 'Bệnh truyền nhiễm gia súc và gia cầm',
		key: 'NS372',
	},
	{
		name: 'Bệnh ký sinh gia súc và gia cầm',
		key: 'NS373',
	},
	{
		name: 'Ứng dụng các hoạt chất thiên nhiên',
		key: 'NS374',
	},
	{
		name: 'TT. Ứng dụng các hoạt chất thiên nhiên',
		key: 'NS375',
	},
	{
		name: 'Kỹ thuật sinh học',
		key: 'NS376',
	},
	{
		name: 'TT. Kỹ thuật sinh học',
		key: 'NS377',
	},
	{
		name: 'Thực tập giáo trình SHƯD',
		key: 'NS379',
	},
	{
		name: 'Vi sinh vật trong nông nghiệp',
		key: 'NS381',
	},
	{
		name: 'Công nghệ sinh học thực vật',
		key: 'NS383',
	},
	{
		name: 'Công nghệ sau thu hoạch rau hoa quả',
		key: 'NS384',
	},
	{
		name: 'Luận văn tốt nghiệp SHƯD',
		key: 'NS385',
	},
	{
		name: 'Tiểu luận tốt nghiệp SHƯD',
		key: 'NS386',
	},
	{
		name: 'Công nghệ sau thu hoạch thủy hải sản',
		key: 'NS387',
	},
	{
		name: 'Công nghệ sau thu hoạch súc sản',
		key: 'NS388',
	},
	{
		name: 'Quản lý sản xuất trong công nghiệp thực phẩm',
		key: 'NS389',
	},
	{
		name: 'Thực tập kỹ thuật sau thu hoạch (PTN)',
		key: 'NS391',
	},
	{
		name: 'Công nghệ chế biến sản phẩm từ ngũ cốc',
		key: 'NS393',
	},
	{
		name: 'Luận văn tốt nghiệp - CNSTH',
		key: 'NS394',
	},
	{
		name: 'Ứng dụng cơ giới hoá trong nông nghiệp',
		key: 'NS402',
	},
	{
		name: 'Ứng dụng công nghệ cao trong quản lý nước cho cây trồng',
		key: 'NS405',
	},
	{
		name: 'Công nghệ thông tin trong nông nghiệp',
		key: 'NS423',
	},
	{
		name: 'Luận văn tốt nghiệp - BVTV',
		key: 'NS501',
	},
	{
		name: 'Xã hội học phát triển nông thôn',
		key: 'PD122',
	},
	{
		name: 'Hoạt động thực tiễn',
		key: 'PD219',
	},
	{
		name: 'Phát triển cộng đồng',
		key: 'PD303',
	},
	{
		name: 'Tổ chức chính trị - xã hội - nghề nghiệp',
		key: 'PD309',
	},
	{
		name: 'Quản trị doanh nghiệp nông thôn',
		key: 'PD316',
	},
	{
		name: 'Luận văn tốt nghiệp - PTNT',
		key: 'PD323',
	},
	{
		name: 'Chính sách nông nghiệp - PTNT',
		key: 'PD325',
	},
	{
		name: 'Thực tập giáo trình - PTNT',
		key: 'PD329',
	},
	{
		name: 'Xây dựng và quản lý dự án phát triển nông thôn',
		key: 'PD330',
	},
	{
		name: 'Luận văn tốt nghiệp - K.ThNN',
		key: 'PD501',
	},
	{
		name: 'Luận văn tốt nghiệp - KN',
		key: 'PD591',
	},
	{
		name: 'Giáo dục quốc phòng và An ninh 1 (*)',
		key: 'QP010',
	},
	{
		name: 'Giáo dục quốc phòng và An ninh 2 (*)',
		key: 'QP011',
	},
	{
		name: 'Giáo dục quốc phòng và An ninh 3 (*)',
		key: 'QP012',
	},
	{
		name: 'Giáo dục quốc phòng và An ninh 4 (*)',
		key: 'QP013',
	},
	{
		name: 'Quản lý hành chính nhà nước và quản lý ngành giáo dục và đào tạo',
		key: 'SG011',
	},
	{
		name: 'Tập giảng',
		key: 'SG086',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong dạy học tin học',
		key: 'SG089',
	},
	{
		name: 'Phương pháp dạy học tin học',
		key: 'SG093',
	},
	{
		name: 'Vi tích phân',
		key: 'SG100',
	},
	{
		name: 'Phương pháp dạy học Địa lý',
		key: 'SG111',
	},
	{
		name: 'Tâm lý học sư phạm giáo dục tiểu học',
		key: 'SG113',
	},
	{
		name: 'Giáo dục so sánh và giáo dục bền vững',
		key: 'SG114',
	},
	{
		name: 'Hoạt động giáo dục trong nhà trường tiểu học',
		key: 'SG115',
	},
	{
		name: 'Tập giảng Văn giáo dục tiểu học',
		key: 'SG123',
	},
	{
		name: 'Tập giảng Toán giáo dục tiểu học',
		key: 'SG124',
	},
	{
		name: 'Môi trường và giáo dục môi trường Ở tiểu học',
		key: 'SG128',
	},
	{
		name: 'Sinh lý và bệnh lý trẻ em giáo dục tiểu học',
		key: 'SG129',
	},
	{
		name: 'Bản đồ học',
		key: 'SG130',
	},
	{
		name: 'Hoạt động giáo dục trong nhà trường phổ thông',
		key: 'SG131',
	},
	{
		name: 'Phương pháp dạy học Ngữ Văn',
		key: 'SG139',
	},
	{
		name: 'Nhập môn Khoa học Lịch sử',
		key: 'SG140',
	},
	{
		name: 'Phương pháp dạy học Toán',
		key: 'SG152',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong dạy học toán',
		key: 'SG156',
	},
	{
		name: 'Tập giảng toán',
		key: 'SG158',
	},
	{
		name: 'Giáo dục môi trường trong dạy học Vật lý',
		key: 'SG166',
	},
	{
		name: 'Tập giảng Vật lý',
		key: 'SG167',
	},
	{
		name: 'Phương pháp dạy học hóa học',
		key: 'SG171',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong dạy học hóa học',
		key: 'SG175',
	},
	{
		name: 'Tập giảng hóa học',
		key: 'SG176',
	},
	{
		name: 'Tập giảng Sinh học',
		key: 'SG188',
	},
	{
		name: 'Phương pháp dạy học Sinh học',
		key: 'SG193',
	},
	{
		name: 'Giảng dạy các kỹ năng ngôn ngữ',
		key: 'SG203',
	},
	{
		name: 'Tập giảng Ngữ Văn',
		key: 'SG209',
	},
	{
		name: 'Văn học Việt Nam trung đại 2 (nửa cuối thế kỷ XVIII - nửa đầu XIX)',
		key: 'SG212',
	},
	{
		name: 'Văn học Việt Nam hiện đại 1 (1900 - 1930)',
		key: 'SG214',
	},
	{
		name: 'Văn học Việt Nam hiện đại 3 (1945 - 1975)',
		key: 'SG216',
	},
	{
		name: 'Văn học Việt Nam hiện đại 4 (1975 - 2000)',
		key: 'SG217',
	},
	{
		name: 'Văn học châu Á',
		key: 'SG218',
	},
	{
		name: 'Văn bản chữ Nôm',
		key: 'SG220',
	},
	{
		name: 'Tiếng Việt giáo dục tiểu học 1',
		key: 'SG221',
	},
	{
		name: 'Tiếng Việt giáo dục tiểu học 2',
		key: 'SG222',
	},
	{
		name: 'Kỹ thuật và phương pháp dạy học kỹ thuật giáo dục tiểu học',
		key: 'SG223',
	},
	{
		name: 'Dạy học các môn khoa học theo phương pháp bàn tay nặn bột',
		key: 'SG231',
	},
	{
		name: 'Điện học 1',
		key: 'SG247',
	},
	{
		name: 'Vật lý thống kê',
		key: 'SG249',
	},
	{
		name: 'Thực tập Hóa cơ sở',
		key: 'SG259',
	},
	{
		name: 'Kỹ thuật vẽ trong sinh học',
		key: 'SG262',
	},
	{
		name: 'Đa dạng sinh học',
		key: 'SG264',
	},
	{
		name: 'Đọc - viết phê bình',
		key: 'SG278',
	},
	{
		name: 'Ngữ pháp cơ bản',
		key: 'SG279',
	},
	{
		name: 'Ngữ pháp trung cấp',
		key: 'SG280',
	},
	{
		name: 'Ngữ pháp nâng cao',
		key: 'SG281',
	},
	{
		name: 'Ngữ âm thực hành cơ bản',
		key: 'SG282',
	},
	{
		name: 'Ngữ âm thực hành nâng cao',
		key: 'SG283',
	},
	{
		name: 'Phân tích diễn ngôn trong giảng dạy ngôn ngữ',
		key: 'SG287',
	},
	{
		name: 'Phương pháp dạy Tiếng Anh cho trẻ em',
		key: 'SG291',
	},
	{
		name: 'Dạy-học tiếng Anh qua dự Án',
		key: 'SG292',
	},
	{
		name: 'Từ vựng học tiếng Việt',
		key: 'SG295',
	},
	{
		name: 'Cú pháp học tiếng Việt',
		key: 'SG297',
	},
	{
		name: 'Ngữ dụng học tiếng Việt',
		key: 'SG298',
	},
	{
		name: 'Lịch sử địa phương',
		key: 'SG300',
	},
	{
		name: 'Lịch sử tư tưởng Phương Đông',
		key: 'SG301',
	},
	{
		name: 'Đánh giá kết quả học tập Địa lý',
		key: 'SG307',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong dạy học Địa lý',
		key: 'SG308',
	},
	{
		name: 'Tập giảng Địa lý',
		key: 'SG309',
	},
	{
		name: 'Thạch quyển',
		key: 'SG318',
	},
	{
		name: 'Khí quyển',
		key: 'SG319',
	},
	{
		name: 'Thủy quyển',
		key: 'SG320',
	},
	{
		name: 'Thổ nhưỡng quyển',
		key: 'SG321',
	},
	{
		name: 'Sinh quyển',
		key: 'SG322',
	},
	{
		name: 'Thực hành địa lý địa phương',
		key: 'SG328',
	},
	{
		name: 'Dân cư và môi trường Đồng bằng sông Cửu Long',
		key: 'SG329',
	},
	{
		name: 'Chuyên đề Địa lý nâng cao',
		key: 'SG330',
	},
	{
		name: 'Phương pháp dạy học tiếng Pháp',
		key: 'SG336',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong dạy học tiếng Pháp',
		key: 'SG340',
	},
	{
		name: 'Tập giảng tiếng Pháp',
		key: 'SG341',
	},
	{
		name: 'Soạn giáo Án tiếng Pháp',
		key: 'SG344',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong dạy học Vật lý',
		key: 'SG357',
	},
	{
		name: 'Giao thoa văn hóa - PV',
		key: 'SG361',
	},
	{
		name: 'Từ vựng tiếng Pháp',
		key: 'SG363',
	},
	{
		name: 'Văn bản thông dụng - PV',
		key: 'SG368',
	},
	{
		name: 'Phương pháp công tác đội giáo dục tiểu học',
		key: 'SG375',
	},
	{
		name: 'Anh văn chuyên ngành sư phạm Toán',
		key: 'SG376',
	},
	{
		name: 'Tập giảng môn Lịch sử',
		key: 'SG378',
	},
	{
		name: 'Phương pháp dạy học lập trình',
		key: 'SG389',
	},
	{
		name: 'Xử lý số liệu thống kê',
		key: 'SG391',
	},
	{
		name: 'Giáo dục hòa nhập',
		key: 'SG394',
	},
	{
		name: 'Phương pháp dạy học cơ sở dữ liệu',
		key: 'SG395',
	},
	{
		name: 'Lịch sử Thế giới cổ trung đại 2',
		key: 'SG412',
	},
	{
		name: 'Lý luận dạy học Toán và Khoa học tự nhiên',
		key: 'SG419',
	},
	{
		name: 'Đánh giá kết quả học tập Toán và Khoa học tự nhiên',
		key: 'SG422',
	},
	{
		name: 'Đánh giá kết quả học tập Ngữ văn và Khoa học xã hội',
		key: 'SG423',
	},
	{
		name: 'Phát triển chương trình giáo dục Ngữ văn và Khoa học xã hội',
		key: 'SG429',
	},
	{
		name: 'Phát triển chương trình giáo dục tiểu học',
		key: 'SG430',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học Giáo dục',
		key: 'SG439',
	},
	{
		name: 'Sinh học phân tử và tế bào',
		key: 'SG449',
	},
	{
		name: 'Cố vấn học tập sinh hoạt lớp',
		key: 'SHCVHT',
	},
	{
		name: 'Tâm lý học đại cương',
		key: 'SP009',
	},
	{
		name: 'Tâm lý học sư phạm',
		key: 'SP010',
	},
	{
		name: 'Địa lý chính trị',
		key: 'SP017',
	},
	{
		name: 'Lịch sử khẩn hoang Nam Bộ',
		key: 'SP025',
	},
	{
		name: 'Phương pháp dạy học tiếng Việt giáo dục tiểu học 1',
		key: 'SP056',
	},
	{
		name: 'Mỹ thuật và phương pháp dạy học mỹ thuật - GDTH',
		key: 'SP058',
	},
	{
		name: 'Đạo đức và phương pháp dạy học đạo đức',
		key: 'SP062',
	},
	{
		name: 'Phát triển tư duy qua dạy toán',
		key: 'SP069',
	},
	{
		name: 'Giáo dục học',
		key: 'SP079',
	},
	{
		name: 'Hình học Aphin và Euclide',
		key: 'SP084',
	},
	{
		name: 'Số học',
		key: 'SP103',
	},
	{
		name: 'Giải tích hàm một biến',
		key: 'SP111',
	},
	{
		name: 'Hình học giải tích',
		key: 'SP113',
	},
	{
		name: 'Lịch sử Toán',
		key: 'SP130',
	},
	{
		name: 'Cơ học đại cương 2',
		key: 'SP134',
	},
	{
		name: 'TT. Điện học',
		key: 'SP138',
	},
	{
		name: 'Quang học',
		key: 'SP139',
	},
	{
		name: 'Toán cho Vật lý 1',
		key: 'SP142',
	},
	{
		name: 'Thực tế ngoài trường - Vật lý',
		key: 'SP146',
	},
	{
		name: 'Sinh thái học',
		key: 'SP167',
	},
	{
		name: 'Phân loại thực vật A',
		key: 'SP168',
	},
	{
		name: 'Động vật không xương sống',
		key: 'SP176',
	},
	{
		name: 'TT. Động vật không xương sống',
		key: 'SP177',
	},
	{
		name: 'Động vật có xương sống',
		key: 'SP180',
	},
	{
		name: 'TT. Động vật có xương sống',
		key: 'SP181',
	},
	{
		name: 'Anh văn chuyên ngành sinh học',
		key: 'SP184',
	},
	{
		name: 'TT. Phân loại thực vật A',
		key: 'SP190',
	},
	{
		name: 'Anh văn chuyên ngành sư phạm Hóa',
		key: 'SP191',
	},
	{
		name: 'Toán sơ cấp - GDTH',
		key: 'SP199',
	},
	{
		name: 'Lịch sử văn minh Việt Nam',
		key: 'SP200',
	},
	{
		name: 'Giảng dạy văn chương',
		key: 'SP208',
	},
	{
		name: 'Phát triển giáo trình giảng dạy',
		key: 'SP211',
	},
	{
		name: 'Thực tế ngoài trường - SP.Sử',
		key: 'SP227',
	},
	{
		name: 'Khảo cổ học',
		key: 'SP231',
	},
	{
		name: 'Dân tộc học đại cương',
		key: 'SP232',
	},
	{
		name: 'Lý luận và lịch sử tôn giáo',
		key: 'SP234',
	},
	{
		name: 'Lịch sử văn minh thế giới',
		key: 'SP235',
	},
	{
		name: 'Lịch sử quan hệ quốc tế',
		key: 'SP236',
	},
	{
		name: 'Rèn luyện nghiệp vụ SP.Lịch sử',
		key: 'SP240',
	},
	{
		name: 'Ứng dụng CNTT trong dạy học lịch sử ở trường phổ thông',
		key: 'SP241',
	},
	{
		name: 'Kỹ thuật báo cáo chuyên đề',
		key: 'SP269',
	},
	{
		name: 'Tôpô đại cương',
		key: 'SP302',
	},
	{
		name: 'Lý thuyết nhóm',
		key: 'SP303',
	},
	{
		name: 'Quy hoạch tuyến tính',
		key: 'SP304',
	},
	{
		name: 'Cơ sở hình học',
		key: 'SP308',
	},
	{
		name: 'Toán rời rạc',
		key: 'SP309',
	},
	{
		name: 'Hoạt động dạy và học môn Toán',
		key: 'SP312',
	},
	{
		name: 'Phương trình đạo hàm riêng',
		key: 'SP317',
	},
	{
		name: 'Hình học vi phân',
		key: 'SP331',
	},
	{
		name: 'Phương pháp dạy học toán 1 - GDTH',
		key: 'SP336',
	},
	{
		name: 'Kỹ thuật điện 1 - Vật lý',
		key: 'SP347',
	},
	{
		name: 'TT. Kỹ thuật điện 1',
		key: 'SP348',
	},
	{
		name: 'Cơ học lượng tử 1',
		key: 'SP352',
	},
	{
		name: 'Vật lý chất rắn',
		key: 'SP357',
	},
	{
		name: 'Tin học cho dạy học',
		key: 'SP363',
	},
	{
		name: 'Vật lý Nano và ứng dụng',
		key: 'SP366',
	},
	{
		name: 'Vật lý hạt cơ bản',
		key: 'SP368',
	},
	{
		name: 'Sinh hóa - SP.Hóa',
		key: 'SP378',
	},
	{
		name: 'TT. Hóa vô cơ',
		key: 'SP384',
	},
	{
		name: 'Phương pháp phân tích công cụ',
		key: 'SP392',
	},
	{
		name: 'TT. Phương pháp phân tích công cụ',
		key: 'SP393',
	},
	{
		name: 'TT. Sinh hóa',
		key: 'SP406',
	},
	{
		name: 'Lịch sử hóa học',
		key: 'SP410',
	},
	{
		name: 'Kỹ thuật phòng thí nghiệm hóa học',
		key: 'SP411',
	},
	{
		name: 'Giải phẫu người và động vật',
		key: 'SP415',
	},
	{
		name: 'TT. Giải phẫu người và động vật',
		key: 'SP416',
	},
	{
		name: 'Thí nghiệm sinh học phổ thông',
		key: 'SP421',
	},
	{
		name: 'Câu hỏi và bài tập Sinh phổ thông',
		key: 'SP429',
	},
	{
		name: 'Sinh thái học ứng dụng',
		key: 'SP433',
	},
	{
		name: 'Kỹ thuật điện tử 1',
		key: 'SP436',
	},
	{
		name: 'Kỹ năng giao tiếp chuyên nghiệp',
		key: 'SP445',
	},
	{
		name: 'Nói trước công chúng',
		key: 'SP466',
	},
	{
		name: 'Tiểu luận tốt nghiệp',
		key: 'SP471',
	},
	{
		name: 'Địa lý du lịch',
		key: 'SP473',
	},
	{
		name: 'Địa lý tự nhiên Việt Nam',
		key: 'SP477',
	},
	{
		name: 'Địa lý kinh tế - xã hội Việt nam',
		key: 'SP480',
	},
	{
		name: 'Địa lý kinh tế - xã hội thế giới 1',
		key: 'SP481',
	},
	{
		name: 'Lịch sử thế giới cận đại 2',
		key: 'SP497',
	},
	{
		name: 'Lịch sử thế giới hiện đại 2',
		key: 'SP499',
	},
	{
		name: 'Lịch sử Việt Nam cổ trung đại 2',
		key: 'SP501',
	},
	{
		name: 'Lịch sử Việt Nam cận đại 2',
		key: 'SP503',
	},
	{
		name: 'Lịch sử Việt Nam hiện đại 2',
		key: 'SP505',
	},
	{
		name: 'Nguyên lý lý luận văn học',
		key: 'SP513',
	},
	{
		name: 'Hóa lượng tử',
		key: 'SP517',
	},
	{
		name: 'Tiến hoá',
		key: 'SP528',
	},
	{
		name: 'Văn học Nga',
		key: 'SP529',
	},
	{
		name: 'Tiến trình văn học',
		key: 'SP531',
	},
	{
		name: 'Phong cách học tiếng Việt',
		key: 'SP533',
	},
	{
		name: 'Văn học Châu Mỹ',
		key: 'SP534',
	},
	{
		name: 'Sinh học phát triển động vật và thực vật',
		key: 'SP545',
	},
	{
		name: 'Công nghệ Gen và tế bào',
		key: 'SP550',
	},
	{
		name: 'Xác suất thống kê - Toán',
		key: 'SP585',
	},
	{
		name: 'Kiến tập Sư phạm',
		key: 'SP597',
	},
	{
		name: 'Điền kinh 1 (*)',
		key: 'TC001',
	},
	{
		name: 'Điền kinh 2 (*)',
		key: 'TC002',
	},
	{
		name: 'Taekwondo 1 (*)',
		key: 'TC003',
	},
	{
		name: 'Taekwondo 2 (*)',
		key: 'TC004',
	},
	{
		name: 'Bóng chuyền 1 (*)',
		key: 'TC005',
	},
	{
		name: 'Bóng chuyền 2 (*)',
		key: 'TC006',
	},
	{
		name: 'Bóng đá 1 (*)',
		key: 'TC007',
	},
	{
		name: 'Bóng đá 2 (*)',
		key: 'TC008',
	},
	{
		name: 'Bóng bàn 1 (*)',
		key: 'TC009',
	},
	{
		name: 'Bóng bàn 2 (*)',
		key: 'TC010',
	},
	{
		name: 'Cầu lông 1 (*)',
		key: 'TC011',
	},
	{
		name: 'Cầu lông 2 (*)',
		key: 'TC012',
	},
	{
		name: 'Bơi lội (*)',
		key: 'TC013',
	},
	{
		name: 'Thể dục nhịp điệu 1 (*)',
		key: 'TC016',
	},
	{
		name: 'Thể dục nhịp điệu 2 (*)',
		key: 'TC017',
	},
	{
		name: 'Thể dục nhịp điệu 3 (*)',
		key: 'TC018',
	},
	{
		name: 'Taekwondo 3 (*)',
		key: 'TC019',
	},
	{
		name: 'Bóng chuyền 3 (*)',
		key: 'TC020',
	},
	{
		name: 'Bóng đá 3 (*)',
		key: 'TC021',
	},
	{
		name: 'Bóng bàn 3 (*)',
		key: 'TC022',
	},
	{
		name: 'Cầu lông 3 (*)',
		key: 'TC023',
	},
	{
		name: 'Điền kinh 3 (*)',
		key: 'TC024',
	},
	{
		name: 'Cờ vua 1 (*)',
		key: 'TC025',
	},
	{
		name: 'Cờ vua 2 (*)',
		key: 'TC026',
	},
	{
		name: 'Cờ vua 3 (*)',
		key: 'TC027',
	},
	{
		name: 'Bóng rổ 1 (*)',
		key: 'TC028',
	},
	{
		name: 'Bóng rổ 2 (*)',
		key: 'TC029',
	},
	{
		name: 'Bóng rổ 3 (*)',
		key: 'TC030',
	},
	{
		name: 'Tennis 1 (*)',
		key: 'TC031',
	},
	{
		name: 'Lý luận và phương pháp TDTT trường PT',
		key: 'TC109',
	},
	{
		name: 'Đo lường - TDTT',
		key: 'TC111',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - TDTT',
		key: 'TC122',
	},
	{
		name: 'Sinh cơ học - TDTT',
		key: 'TC123',
	},
	{
		name: 'Lịch sử Thể dục thể thao',
		key: 'TC125',
	},
	{
		name: 'Sinh lý học - TDTT 1',
		key: 'TC126',
	},
	{
		name: 'Đánh giá môn học Giáo dục thể chất',
		key: 'TC128',
	},
	{
		name: 'Thiết kế chương trình môn học giáo dục thể chất',
		key: 'TC129',
	},
	{
		name: 'Tập giảng thể dục thể thao',
		key: 'TC130',
	},
	{
		name: 'Lý luận và phương pháp thể dục thể thao trường phổ thông',
		key: 'TC199',
	},
	{
		name: 'Phổ tu điền kinh',
		key: 'TC201',
	},
	{
		name: 'Phổ tu Bóng đá',
		key: 'TC203',
	},
	{
		name: 'Bóng chuyền nâng cao 1',
		key: 'TC208',
	},
	{
		name: 'Bóng chuyền nâng cao 5',
		key: 'TC210',
	},
	{
		name: 'Taekwondo',
		key: 'TC315',
	},
	{
		name: 'Phổ tu Thể dục',
		key: 'TC370',
	},
	{
		name: 'Công tác Đoàn - Đội và Trò chơi vận động',
		key: 'TC381',
	},
	{
		name: 'Bóng đá nâng cao 3',
		key: 'TC392',
	},
	{
		name: 'Bóng ném',
		key: 'TC396',
	},
	{
		name: 'Luận văn tốt nghiệp - TDTT',
		key: 'TC400',
	},
	{
		name: 'Vi - Tích phân A1',
		key: 'TN001',
	},
	{
		name: 'Vi - Tích phân A2',
		key: 'TN002',
	},
	{
		name: 'Toán cao cấp A',
		key: 'TN006',
	},
	{
		name: 'Toán cao cấp C',
		key: 'TN009',
	},
	{
		name: 'Xác suất thống kê',
		key: 'TN010',
	},
	{
		name: 'Đại số tuyến tính và hình học',
		key: 'TN012',
	},
	{
		name: 'Đại số tuyến tính',
		key: 'TN013',
	},
	{
		name: 'Cơ và nhiệt đại cương',
		key: 'TN014',
	},
	{
		name: 'Hóa học đại cương',
		key: 'TN019',
	},
	{
		name: 'TT. Hóa học đại cương',
		key: 'TN020',
	},
	{
		name: 'Hóa vô cơ và hữu cơ đại cương',
		key: 'TN021',
	},
	{
		name: 'Hóa hữu cơ',
		key: 'TN021H',
	},
	{
		name: 'TT. Hóa vô cơ và hữu cơ đại cương',
		key: 'TN022',
	},
	{
		name: 'Hóa phân tích đại cương',
		key: 'TN023',
	},
	{
		name: 'TT. Hóa phân tích đại cương',
		key: 'TN024',
	},
	{
		name: 'Sinh học đại cương A1',
		key: 'TN025',
	},
	{
		name: 'TT. Sinh học đại cương A1',
		key: 'TN027',
	},
	{
		name: 'Sinh học đại cương A2',
		key: 'TN028',
	},
	{
		name: 'TT. Sinh học đại cương A2',
		key: 'TN030',
	},
	{
		name: 'Con người và môi trường',
		key: 'TN032',
	},
	{
		name: 'Tin học căn bản',
		key: 'TN033',
	},
	{
		name: 'Tin học căn bản',
		key: 'TN033H',
	},
	{
		name: 'TT. Tin học căn bản',
		key: 'TN034',
	},
	{
		name: 'TT. Tin học căn bản',
		key: 'TN034H',
	},
	{
		name: 'Microsoft Access',
		key: 'TN037',
	},
	{
		name: 'TT. Microsoft Access',
		key: 'TN038',
	},
	{
		name: 'Hóa học đại cương',
		key: 'TN039',
	},
	{
		name: 'Sinh học đại cương',
		key: 'TN042',
	},
	{
		name: 'TT. Sinh học đại cương',
		key: 'TN043',
	},
	{
		name: 'Xác suất thống kê B',
		key: 'TN044',
	},
	{
		name: 'Vật lý đại cương',
		key: 'TN048',
	},
	{
		name: 'TT. Vật lý đại cương',
		key: 'TN049',
	},
	{
		name: 'Hóa học đại cương 2',
		key: 'TN053',
	},
	{
		name: 'TT. Hóa học đại cương 2',
		key: 'TN054',
	},
	{
		name: 'Toán cao cấp B',
		key: 'TN059',
	},
	{
		name: 'Vi - Tích phân',
		key: 'TN099',
	},
	{
		name: 'Hóa học đại cương 1',
		key: 'TN101',
	},
	{
		name: 'Hóa lý 1',
		key: 'TN108',
	},
	{
		name: 'Hóa Hữu cơ 1',
		key: 'TN111',
	},
	{
		name: 'TT. Hóa Hữu cơ 1',
		key: 'TN112',
	},
	{
		name: 'Hóa phân tích 1',
		key: 'TN115',
	},
	{
		name: 'TT. Hóa vô cơ - CNHH',
		key: 'TN120',
	},
	{
		name: 'Hóa học hữu cơ - CNHH',
		key: 'TN121',
	},
	{
		name: 'TT. Hóa học hữu cơ - CNHH',
		key: 'TN122',
	},
	{
		name: 'TT. Hóa lý - CNHH',
		key: 'TN124',
	},
	{
		name: 'Hóa phân tích - CNHH',
		key: 'TN125',
	},
	{
		name: 'TT. Hóa phân tích - CNHH',
		key: 'TN126',
	},
	{
		name: 'Thống kê sinh học',
		key: 'TN128',
	},
	{
		name: 'TT. Thống kê sinh học',
		key: 'TN129',
	},
	{
		name: 'Vi sinh vật học',
		key: 'TN144',
	},
	{
		name: 'TT. Vi sinh vật học',
		key: 'TN145',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - SH',
		key: 'TN147',
	},
	{
		name: 'Sinh học phát triển',
		key: 'TN151',
	},
	{
		name: 'Thực tế cơ sở - Sinh học',
		key: 'TN152',
	},
	{
		name: 'Giải tích 2',
		key: 'TN156',
	},
	{
		name: 'Đại số tuyến tính và hình học 1',
		key: 'TN158',
	},
	{
		name: 'Đại số đại cương',
		key: 'TN160',
	},
	{
		name: 'Anh văn chuyên môn - Hóa học',
		key: 'TN163',
	},
	{
		name: 'Lý thuyết độ đo và tích phân',
		key: 'TN164',
	},
	{
		name: 'Anh văn chuyên môn - TTK',
		key: 'TN169',
	},
	{
		name: 'TT. Hóa Vô cơ 1',
		key: 'TN173',
	},
	{
		name: 'TT. Hóa phân tích 1',
		key: 'TN180',
	},
	{
		name: 'Giải tích phức',
		key: 'TN189',
	},
	{
		name: 'Giải tích hàm',
		key: 'TN191',
	},
	{
		name: 'Hệ thống mạng máy tính căn bản',
		key: 'TN205',
	},
	{
		name: 'Lập trình .NET',
		key: 'TN207',
	},
	{
		name: 'Nhập môn hệ thống thông tin địa lý',
		key: 'TN211',
	},
	{
		name: 'Xây dựng hệ thống thông tin địa lý',
		key: 'TN213',
	},
	{
		name: 'Xây dựng ứng dụng thương mại điện tử',
		key: 'TN218',
	},
	{
		name: 'Anh văn chuyên môn - THUD',
		key: 'TN226',
	},
	{
		name: 'Cơ sở dữ liệu đa phương tiện',
		key: 'TN233',
	},
	{
		name: 'Hóa sinh học',
		key: 'TN235',
	},
	{
		name: 'Hóa vô cơ 1',
		key: 'TN236',
	},
	{
		name: 'Anh văn chuyên môn - Sinh học',
		key: 'TN237',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Sinh học',
		key: 'TN238',
	},
	{
		name: 'Hóa học Dược liệu',
		key: 'TN243',
	},
	{
		name: 'Phương pháp phân tích độc chất và kháng sinh trong động thực vật',
		key: 'TN245',
	},
	{
		name: 'Các định lý giới hạn',
		key: 'TN251',
	},
	{
		name: 'TT. Nhiệt học',
		key: 'TN260',
	},
	{
		name: 'Điện từ học',
		key: 'TN261',
	},
	{
		name: 'TT. Điện từ học',
		key: 'TN262',
	},
	{
		name: 'Quang học',
		key: 'TN263',
	},
	{
		name: 'Cơ học lượng tử ứng dụng 2',
		key: 'TN269',
	},
	{
		name: 'Vật lý hạt nhân và nguyên tử',
		key: 'TN270',
	},
	{
		name: 'Điện động lực học',
		key: 'TN271',
	},
	{
		name: 'Vật lý chất rắn',
		key: 'TN272',
	},
	{
		name: 'Anh văn chuyên môn - VLKT',
		key: 'TN274',
	},
	{
		name: 'Quản trị dự Án tin học',
		key: 'TN277',
	},
	{
		name: 'Xử lý tín hiệu',
		key: 'TN279',
	},
	{
		name: 'Quang phổ học và ứng dụng',
		key: 'TN284',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học',
		key: 'TN288',
	},
	{
		name: 'Lý sinh học',
		key: 'TN290',
	},
	{
		name: 'Các phương pháp phân tích không hủy mẫu',
		key: 'TN292',
	},
	{
		name: 'Niên luận kỹ thuật 1',
		key: 'TN299',
	},
	{
		name: 'Hóa lượng tử đại cương',
		key: 'TN301',
	},
	{
		name: 'Các phương pháp phân tích hiện đại',
		key: 'TN308',
	},
	{
		name: 'TT. Hóa môi trường',
		key: 'TN312',
	},
	{
		name: 'TT. Phân tích kỹ thuật',
		key: 'TN322',
	},
	{
		name: 'Các phương pháp thống kê hóa học',
		key: 'TN323',
	},
	{
		name: 'Luận văn tốt nghiệp',
		key: 'TN338',
	},
	{
		name: 'Độc chất học môi trường',
		key: 'TN339',
	},
	{
		name: 'Nuôi cấy mô thực vật',
		key: 'TN340',
	},
	{
		name: 'Luận văn tốt nghiệp - Sinh học',
		key: 'TN343',
	},
	{
		name: 'Luận văn tốt nghiệp - TTK',
		key: 'TN360',
	},
	{
		name: 'Các phương pháp phổ nghiệm hữu cơ',
		key: 'TN361',
	},
	{
		name: 'TT. Hóa sinh học',
		key: 'TN364',
	},
	{
		name: 'Hóa dược',
		key: 'TN367',
	},
	{
		name: 'Thống kê nâng cao',
		key: 'TN368',
	},
	{
		name: 'Thống kê dự báo',
		key: 'TN369',
	},
	{
		name: 'Mô hình toán học',
		key: 'TN372',
	},
	{
		name: 'TT. Hóa học hợp chất thiên nhiên',
		key: 'TN379',
	},
	{
		name: 'TT. Tổng hợp Hóa dược',
		key: 'TN381',
	},
	{
		name: 'Thử nghiệm sinh học',
		key: 'TN384',
	},
	{
		name: 'Phản Ứng độc hại của thuốc',
		key: 'TN390',
	},
	{
		name: 'Luận văn tốt nghiệp - Hóa dược',
		key: 'TN393',
	},
	{
		name: 'Tiểu luận tốt nghiệp - THƯD',
		key: 'TN396',
	},
	{
		name: 'Sinh học miễn dịch',
		key: 'TN397',
	},
	{
		name: 'Vật lý màng mỏng',
		key: 'TN399',
	},
	{
		name: 'Quản trị hệ thống mạng',
		key: 'TN404',
	},
	{
		name: 'Niên luận - THƯD',
		key: 'TN408',
	},
	{
		name: 'Luận văn tốt nghiệp - THƯD',
		key: 'TN418',
	},
	{
		name: 'Vật liệu cấu trúc nano',
		key: 'TN419',
	},
	{
		name: 'Vật liệu từ',
		key: 'TN421',
	},
	{
		name: 'Niên luận kỹ thuật 2',
		key: 'TN422',
	},
	{
		name: 'Luận văn tốt nghiệp - VLKT',
		key: 'TN423',
	},
	{
		name: 'Luận văn tốt nghiệp - Hóa dược',
		key: 'TN433',
	},
	{
		name: 'TT. Thử nghiệm sinh học',
		key: 'TN435',
	},
	{
		name: 'Hóa lượng tử đại cương',
		key: 'TN436',
	},
	{
		name: 'Hóa môi trường',
		key: 'TN437',
	},
	{
		name: 'Kiểm nghiệm dược phẩm và thực phẩm',
		key: 'TN439',
	},
	{
		name: 'Phân loại và nhận dạng thống kê',
		key: 'TN445',
	},
	{
		name: 'Hóa học hợp chất thiên nhiên',
		key: 'TN452',
	},
	{
		name: 'Hóa dược 1',
		key: 'TN453',
	},
	{
		name: 'Tổng hợp hóa dược',
		key: 'TN455',
	},
	{
		name: 'Kỹ thuật kiểm nghiệm dược',
		key: 'TN458',
	},
	{
		name: 'TT. Kỹ thuật kiểm nghiệm dược',
		key: 'TN459',
	},
	{
		name: 'Cơ học',
		key: 'TN463',
	},
	{
		name: 'Vật lý điện tử',
		key: 'TN474',
	},
	{
		name: 'Sinh hóa - TS',
		key: 'TS100',
	},
	{
		name: 'Sinh thái thủy sinh vật',
		key: 'TS104',
	},
	{
		name: 'Sinh lý động vật thủy sản A',
		key: 'TS106',
	},
	{
		name: 'Dinh dưỡng và thức ăn thủy sản A',
		key: 'TS107',
	},
	{
		name: 'Di truyền và chọn giống thủy sản',
		key: 'TS108',
	},
	{
		name: 'Phương pháp nghiên cứu sinh học cá',
		key: 'TS111',
	},
	{
		name: 'Dinh dưỡng và thức ăn thủy sản B',
		key: 'TS118',
	},
	{
		name: 'Sinh học phân tử đại cương',
		key: 'TS119',
	},
	{
		name: 'Phương pháp nghiên cứu kinh tế - Xã hội nghề cá',
		key: 'TS121',
	},
	{
		name: 'Anh văn chuyên môn - CBTS',
		key: 'TS132',
	},
	{
		name: 'Vi sinh thủy sản đại cương A',
		key: 'TS145',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - Thủy sản',
		key: 'TS147',
	},
	{
		name: 'Hình thái và phân loại tôm, cá',
		key: 'TS153',
	},
	{
		name: 'Phương pháp TN và viết báo cáo - TS',
		key: 'TS155',
	},
	{
		name: 'Nuôi trồng thủy sản',
		key: 'TS166',
	},
	{
		name: 'Luật và các điều ước quốc tế về biển',
		key: 'TS183',
	},
	{
		name: 'Thực vật thủy sinh',
		key: 'TS196',
	},
	{
		name: 'Động vật thủy sinh',
		key: 'TS197',
	},
	{
		name: 'Miễn dịch học thủy sản đại cương',
		key: 'TS198',
	},
	{
		name: 'Phương pháp thu và phân tích nguồn lợi thủy sản',
		key: 'TS201',
	},
	{
		name: 'Phân tích hoạt động kinh doanh',
		key: 'TS204',
	},
	{
		name: 'Xây dựng và thẩm định dự án đầu tư',
		key: 'TS206',
	},
	{
		name: 'Vi sinh thực phẩm thủy sản 2',
		key: 'TS210',
	},
	{
		name: 'Phân tích thực phẩm thủy sản',
		key: 'TS213',
	},
	{
		name: 'Thực tập giáo trình cơ sở chế biến thủy sản',
		key: 'TS216',
	},
	{
		name: 'Bao bì thực phẩm thủy sản',
		key: 'TS221',
	},
	{
		name: 'Phát triển sản phẩm thủy sản mới',
		key: 'TS224',
	},
	{
		name: 'Marketing thực phẩm thủy sản',
		key: 'TS225',
	},
	{
		name: 'Quản trị doanh nghiệp thủy sản',
		key: 'TS230',
	},
	{
		name: 'Kỹ thuật sản xuất giống và nuôi cá nước ngọt',
		key: 'TS241',
	},
	{
		name: 'Quản lý nghề cá ven bờ',
		key: 'TS244',
	},
	{
		name: 'Thủy sản đại cương',
		key: 'TS252',
	},
	{
		name: 'Giá trị dinh dưỡng sản phẩm thủy sản',
		key: 'TS259',
	},
	{
		name: 'Thực tập giáo trình nuôi thủy sản nước ngọt',
		key: 'TS269',
	},
	{
		name: 'Chuyên đề xét nghiệm giống thủy sản',
		key: 'TS285',
	},
	{
		name: 'Chuyên đề chẩn đoán bệnh động vật thủy sản',
		key: 'TS291',
	},
	{
		name: 'Chuyên đề kỹ thuật nuôi thủy sản',
		key: 'TS292',
	},
	{
		name: 'Chuyên đề kỹ thuật sản xuất giống thủy sản',
		key: 'TS293',
	},
	{
		name: 'Kỹ thuật nuôi cá nước ngọt',
		key: 'TS301',
	},
	{
		name: 'Kỹ thuật sản xuất giống cá nước ngọt',
		key: 'TS303',
	},
	{
		name: 'Quản lý dịch bệnh thủy sản',
		key: 'TS305',
	},
	{
		name: 'Thực tập giáo trình nuôi thủy sản nước ngọt',
		key: 'TS306',
	},
	{
		name: 'Kỹ thuật nuôi thức ăn tự nhiên',
		key: 'TS309',
	},
	{
		name: 'Kỹ thuật nuôi cá cảnh và thủy đặc sản',
		key: 'TS310',
	},
	{
		name: 'Kỹ thuật khai thác thủy sản B',
		key: 'TS312',
	},
	{
		name: 'Kỹ thuật nuôi động vật thân mềm',
		key: 'TS313',
	},
	{
		name: 'Thuốc và hóa chất trong thủy sản',
		key: 'TS315',
	},
	{
		name: 'Công trình và thiết bị thủy sản',
		key: 'TS320',
	},
	{
		name: 'Tiểu luận tốt nghiệp - NTTS',
		key: 'TS322',
	},
	{
		name: 'Luận văn tốt nghiệp - NTTS',
		key: 'TS325',
	},
	{
		name: 'Thực tập giáo trình Kỹ thuật thủy sản',
		key: 'TS330',
	},
	{
		name: 'Thực tập giáo trình bệnh học 1',
		key: 'TS331',
	},
	{
		name: 'Thực tập giáo trình bệnh học 2',
		key: 'TS332',
	},
	{
		name: 'Kỹ thuật sản xuất giống và nuôi cá biển',
		key: 'TS335',
	},
	{
		name: 'Tổng hợp kiến thức bệnh - BHTS',
		key: 'TS341',
	},
	{
		name: 'Luận văn tốt nghiệp - BHTS',
		key: 'TS343',
	},
	{
		name: 'Kinh tế tài nguyên thủy sản',
		key: 'TS349',
	},
	{
		name: 'Phụ gia chế biến thủy sản',
		key: 'TS365',
	},
	{
		name: 'Chế biến sản phẩm thủy sản giá trị gia tăng',
		key: 'TS369',
	},
	{
		name: 'Thiết bị chế biến thủy sản',
		key: 'TS371',
	},
	{
		name: 'Luận văn tốt nghiệp - CBTS',
		key: 'TS376',
	},
	{
		name: 'Quản trị doanh nghiệp thủy sản',
		key: 'TS380',
	},
	{
		name: 'Kỹ thuật sản xuất giống và nuôi thủy sản nước lợ',
		key: 'TS406',
	},
	{
		name: 'Kỹ thuật sản xuất giống và nuôi giáp xác',
		key: 'TS409',
	},
	{
		name: 'Quản lý chất lượng môi trường ao nuôi thủy sản',
		key: 'TS410',
	},
	{
		name: 'Vi sinh vật hữu Ích',
		key: 'TS412',
	},
	{
		name: 'Vệ sinh an toàn thực phẩm thủy sản',
		key: 'TS413',
	},
	{
		name: 'Công nghệ chế biến thủy sản lạnh đông',
		key: 'TS416',
	},
	{
		name: 'Marketing thủy sản',
		key: 'TS432',
	},
	{
		name: 'Đánh giá và quản lý nguồn lợi thủy sản',
		key: 'TS433',
	},
	{
		name: 'Luận văn tốt nghiệp - NTTS',
		key: 'TS502',
	},
	{
		name: 'Luận văn tốt nghiệp - QLTS',
		key: 'TS594',
	},
	{
		name: 'Xã hội thông tin',
		key: 'TV101',
	},
	{
		name: 'Công nghệ và các hệ thống thông tin',
		key: 'TV104',
	},
	{
		name: 'Các hệ thống tổ chức và truy cập thông tin',
		key: 'TV109',
	},
	{
		name: 'Anh văn chuyên ngành TT-TV 1',
		key: 'TV111',
	},
	{
		name: 'Anh văn chuyên ngành TT-TV 2',
		key: 'TV112',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học thông tin thư viện',
		key: 'TV122',
	},
	{
		name: 'Giao tiếp trong công sở',
		key: 'TV123',
	},
	{
		name: 'Định chủ đề',
		key: 'TV124',
	},
	{
		name: 'Marketing trong thư viện và cơ quan thông tin',
		key: 'TV126',
	},
	{
		name: 'Nguồn thông tin kinh tế',
		key: 'TV128',
	},
	{
		name: 'Tạo lập cơ sở dữ liệu TT - TV',
		key: 'TV131',
	},
	{
		name: 'Kỹ năng thông tin căn bản',
		key: 'TV132',
	},
	{
		name: 'Nhập môn công tác quản lý trong các cơ quan thông tin',
		key: 'TV137',
	},
	{
		name: 'Từ vựng 2-PV',
		key: 'TV139',
	},
	{
		name: 'Nghe nói 1 - PV',
		key: 'TV201',
	},
	{
		name: 'Nghe nói 2 - PV',
		key: 'TV202',
	},
	{
		name: 'Nghe nói 3 - PV',
		key: 'TV203',
	},
	{
		name: 'Nghe nói 4 - PV',
		key: 'TV204',
	},
	{
		name: 'Đọc hiểu 2 - PV',
		key: 'TV206',
	},
	{
		name: 'Đọc hiểu 4 - PV',
		key: 'TV208',
	},
	{
		name: 'Viết 2 - PV',
		key: 'TV210',
	},
	{
		name: 'Ngữ pháp 1 - PV',
		key: 'TV213',
	},
	{
		name: 'Ngữ pháp 2 - PV',
		key: 'TV214',
	},
	{
		name: 'Ngữ pháp 3 - PV',
		key: 'TV215',
	},
	{
		name: 'Ngữ pháp 4 - PV',
		key: 'TV216',
	},
	{
		name: 'Ngữ âm thực hành - PV',
		key: 'TV217',
	},
	{
		name: 'Văn hóa Pháp 1 - PV',
		key: 'TV218',
	},
	{
		name: 'Văn hóa Pháp 2 - PV',
		key: 'TV219',
	},
	{
		name: 'Biên dịch 1 - PV',
		key: 'TV222',
	},
	{
		name: 'Phiên dịch 1 - PV',
		key: 'TV224',
	},
	{
		name: 'Nghiên cứu từ vựng',
		key: 'TV228',
	},
	{
		name: 'Giao tiếp đa văn hóa - PV',
		key: 'TV230',
	},
	{
		name: 'Tiểu luận tốt nghiệp - PV',
		key: 'TV233',
	},
	{
		name: 'Diễn đạt nói theo tình huống',
		key: 'TV238',
	},
	{
		name: 'Kỹ năng DELF B2',
		key: 'TV241',
	},
	{
		name: 'Phiên dịch 3 - PV',
		key: 'TV242',
	},
	{
		name: 'Phương pháp giảng dạy 1-PV',
		key: 'TV243',
	},
	{
		name: 'Cơ sở ngữ dụng và ứng dụng',
		key: 'TV244',
	},
	{
		name: 'Cú pháp học - PV',
		key: 'TV245',
	},
	{
		name: 'Tiếng Pháp Du lịch-khách sạn 1',
		key: 'TV246',
	},
	{
		name: 'Tiếng Pháp thương mại-kinh doanh 1',
		key: 'TV247',
	},
	{
		name: 'Tiếng Pháp hành chánh văn phòng 1',
		key: 'TV248',
	},
	{
		name: 'Tiếng Pháp Du lịch-khách sạn 2',
		key: 'TV249',
	},
	{
		name: 'Tiếng Pháp thương mại-kinh doanh 2',
		key: 'TV250',
	},
	{
		name: 'Tiếng Pháp hành chánh văn phòng 2',
		key: 'TV251',
	},
	{
		name: 'Siêu dữ liệu ứng dụng',
		key: 'TV257',
	},
	{
		name: 'Thiết kế Web',
		key: 'TV301',
	},
	{
		name: 'Quản lý nguồn tài liệu số',
		key: 'TV302',
	},
	{
		name: 'Quản lý hồ sơ và tài liệu lưu trữ',
		key: 'TV309',
	},
	{
		name: 'Hệ thống thông tin thư viện các nước',
		key: 'TV310',
	},
	{
		name: 'Đào tạo kỹ năng thông tin',
		key: 'TV314',
	},
	{
		name: 'Công tác địa chí',
		key: 'TV316',
	},
	{
		name: 'Kinh doanh xuất bản phẩm',
		key: 'TV319',
	},
	{
		name: 'Quản lý nguồn nhân lực và các tổ chức TT-TV',
		key: 'TV326',
	},
	{
		name: 'Chính sách thông tin',
		key: 'TV327',
	},
	{
		name: 'Mô tả tài liệu',
		key: 'TV329',
	},
	{
		name: 'Pháp văn căn bản 3 (*)',
		key: 'XH006',
	},
	{
		name: 'Cơ sở văn hóa Việt Nam',
		key: 'XH011',
	},
	{
		name: 'Tiếng Việt thực hành',
		key: 'XH012',
	},
	{
		name: 'Văn bản và lưu trữ học đại cương',
		key: 'XH014',
	},
	{
		name: 'Mỹ học đại cương',
		key: 'XH016',
	},
	{
		name: 'Anh văn căn bản 1 (*)',
		key: 'XH023',
	},
	{
		name: 'Anh văn căn bản 2 (*)',
		key: 'XH024',
	},
	{
		name: 'Anh văn căn bản 3 (*)',
		key: 'XH025',
	},
	{
		name: 'Xã hội học đại cương',
		key: 'XH028',
	},
	{
		name: 'Tâm lý xã hội học',
		key: 'XH076',
	},
	{
		name: 'Thống kê ứng dụng trong khoa học xã hội',
		key: 'XH077',
	},
	{
		name: 'Nhập môn xã hội học',
		key: 'XH078',
	},
	{
		name: 'Ngôn ngữ văn chương',
		key: 'XH113',
	},
	{
		name: 'Các thể thơ Việt Nam',
		key: 'XH114',
	},
	{
		name: 'Phương pháp nghiên cứu Văn học',
		key: 'XH116',
	},
	{
		name: 'Ngôn ngữ báo chí',
		key: 'XH117',
	},
	{
		name: 'Thủ tục hải quan và cước phí',
		key: 'XH150',
	},
	{
		name: 'Ứng dụng công nghệ thông tin trong du lịch',
		key: 'XH151',
	},
	{
		name: 'Phương pháp nghiên cứu khoa học - Anh văn',
		key: 'XH175',
	},
	{
		name: 'Tiếng Anh chuyên ngành-Du lịch 1',
		key: 'XH187',
	},
	{
		name: 'Tiếng Anh chuyên ngành-Du lịch 2',
		key: 'XH188',
	},
	{
		name: 'Tiếng Anh chuyên ngành-Du lịch 3',
		key: 'XH189',
	},
	{
		name: 'Y tế du lịch',
		key: 'XH190',
	},
	{
		name: 'Niên luận - Ngữ văn',
		key: 'XH191',
	},
	{
		name: 'Biên tập văn bản báo chí',
		key: 'XH192',
	},
	{
		name: 'Kỹ năng giao tiếp xã hội',
		key: 'XH193',
	},
	{
		name: 'Hán văn nâng cao',
		key: 'XH195',
	},
	{
		name: 'Văn học Việt Nam đại cương',
		key: 'XH313',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Văn học',
		key: 'XH346',
	},
	{
		name: 'Luận văn tốt nghiệp - Văn học',
		key: 'XH347',
	},
	{
		name: 'Dẫn luận ngôn ngữ - Anh văn',
		key: 'XH383',
	},
	{
		name: 'Bản đồ du lịch',
		key: 'XH386',
	},
	{
		name: 'Du lịch Văn hóa',
		key: 'XH409',
	},
	{
		name: 'Tổng quan du lịch',
		key: 'XH414',
	},
	{
		name: 'Du lịch sinh thái',
		key: 'XH415',
	},
	{
		name: 'Lữ hành nội địa và quốc tế',
		key: 'XH420',
	},
	{
		name: 'Tuyến điểm du lịch Việt Nam',
		key: 'XH423',
	},
	{
		name: 'Phát triển du lịch bền vững',
		key: 'XH426',
	},
	{
		name: 'Tâm lý du khách và nghệ thuật giao tiếp',
		key: 'XH429',
	},
	{
		name: 'Địa danh du lịch Việt Nam',
		key: 'XH435',
	},
	{
		name: 'Tiểu luận tốt nghiệp - Du lịch',
		key: 'XH439',
	},
	{
		name: 'Luận văn tốt nghiệp - Du lịch',
		key: 'XH440',
	},
	{
		name: 'Ngữ dụng học - Anh văn',
		key: 'XH454',
	},
	{
		name: 'Âm vị học',
		key: 'XH455',
	},
	{
		name: 'Lý thuyết dịch',
		key: 'XH465',
	},
	{
		name: 'Dẫn luận văn chương',
		key: 'XH478',
	},
	{
		name: 'Nói trước công chúng - Anh văn',
		key: 'XH481',
	},
	{
		name: 'Tiểu luận tốt nghiệp',
		key: 'XH498',
	},
	{
		name: 'Luận văn tốt nghiệp',
		key: 'XH499',
	},
	{
		name: 'Ngữ nghĩa học và ngữ dụng học',
		key: 'XH536',
	},
	{
		name: 'Ngôn ngữ học đối chiếu',
		key: 'XH537',
	},
	{
		name: 'Giao tiếp đa văn hóa',
		key: 'XH538',
	},
	{
		name: 'Phê bình văn học đại cương',
		key: 'XH540',
	},
	{
		name: 'Đông Nam Á học',
		key: 'XH547',
	},
	{
		name: 'Tài nguyên và môi trường du lịch Việt Nam',
		key: 'XH556',
	},
	{
		name: 'Thị trường du lịch',
		key: 'XH557',
	},
	{
		name: 'Kỹ năng thuyết trình du lịch',
		key: 'XH558',
	},
	{
		name: 'Nghiệp vụ hướng dẫn du lịch',
		key: 'XH559',
	},
	{
		name: 'Phương pháp nghiên cứu-Du lịch',
		key: 'XH560',
	},
	{
		name: 'Quy hoạch du lịch',
		key: 'XH562',
	},
	{
		name: 'Văn học dân gian đại cương',
		key: 'XH567',
	},
	{
		name: 'Từ Hán Việt',
		key: 'XH580',
	},
	{
		name: 'Tiểu thuyết cổ điển Trung Quốc',
		key: 'XH581',
	},
	{
		name: 'Ca dao Nam Bộ',
		key: 'XH582',
	},
	{
		name: 'Văn hoá, dân cư, môi trường Đồng bằng sông Cửu Long',
		key: 'XH584',
	},
	{
		name: 'Điạ lý tự nhiên Việt Nam - Du lịch',
		key: 'XN101',
	},
	{
		name: 'Địa lý du lịch thế giới',
		key: 'XN103',
	},
	{
		name: 'Kỹ thuật nhiếp ảnh và quay Video',
		key: 'XN110',
	},
	{
		name: 'Các vấn đề xã hội đương đại',
		key: 'XN118',
	},
	{
		name: 'Báo chí truyền thông đại cương',
		key: 'XN201',
	},
	{
		name: 'Biên tập các loại hình báo chí truyền thông',
		key: 'XN202',
	},
	{
		name: 'Chính sách công',
		key: 'XN203',
	},
	{
		name: 'Đại cương văn hóa Việt Nam',
		key: 'XN204',
	},
	{
		name: 'Kiến trúc và nghệ thuật truyền thống Việt Nam',
		key: 'XN206',
	},
	{
		name: 'Kỹ năng hoạt náo và tổ chức teambuilding',
		key: 'XN207',
	},
	{
		name: 'Nghệ thuật học',
		key: 'XN209',
	},
	{
		name: 'Nghiên cứu khoa học xã hội ứng dụng',
		key: 'XN210',
	},
	{
		name: 'Nghiệp vụ chào bán tour và chăm sóc khách hàng',
		key: 'XN212',
	},
	{
		name: 'Ngữ pháp học tiếng Việt',
		key: 'XN215',
	},
	{
		name: 'Nguyên lý lý luận văn học',
		key: 'XN216',
	},
	{
		name: 'Phân tích và xử lý số liệu',
		key: 'XN217',
	},
	{
		name: 'Phê bình văn học Việt Nam hiện đại',
		key: 'XN219',
	},
	{
		name: 'Tạo lập văn bản và giao tiếp hành chính',
		key: 'XN223',
	},
	{
		name: 'Thực hành công tác xã hội',
		key: 'XN225',
	},
	{
		name: 'Văn học Hy Lạp - La Mã cổ đại',
		key: 'XN231',
	},
	{
		name: 'Văn học Nga',
		key: 'XN233',
	},
	{
		name: 'Văn học Việt Nam 1945-1975',
		key: 'XN237',
	},
	{
		name: 'Văn học Việt Nam từ giữa thế kỷ XVIII đến hết thế kỷ XIX',
		key: 'XN239',
	},
	{
		name: 'Văn học Anh - Pháp',
		key: 'XN242',
	},
	{
		name: 'Tổ chức sự kiện và Du lịch MICE',
		key: 'XN302',
	},
	{
		name: 'Du lịch biển đảo',
		key: 'XN303',
	},
	{
		name: 'Du lịch làng nghề',
		key: 'XN305',
	},
	{
		name: 'Nghiệp vụ nhà hàng, khách sạn-Du lịch',
		key: 'XN307',
	},
	{
		name: 'Luật du lịch',
		key: 'XN310',
	},
	{
		name: 'Thực tập nghiệp vụ - Du lịch',
		key: 'XN311',
	},
	{
		name: 'Biên dịch 1: Biên dịch căn bản 1',
		key: 'XN312',
	},
	{
		name: 'Biên dịch 2: Biên dịch căn bản 2',
		key: 'XN313',
	},
	{
		name: 'Phiên dịch 1: Kỹ năng dịch đuổi căn bản 1',
		key: 'XN314',
	},
	{
		name: 'Phiên dịch 2: Kỹ năng dịch đuổi căn bản 2',
		key: 'XN315',
	},
	{
		name: 'Biên dịch 3: Biên dịch nâng cao 1',
		key: 'XN316',
	},
	{
		name: 'Biên dịch Y khoa',
		key: 'XN318',
	},
	{
		name: 'Biên dịch Môi trường',
		key: 'XN319',
	},
	{
		name: 'Biên dịch Kỹ thuật',
		key: 'XN320',
	},
	{
		name: 'Biên dịch Báo chí',
		key: 'XN321',
	},
	{
		name: 'Phiên dịch 3: Kỹ năng dịch đuổi nâng cao 1',
		key: 'XN322',
	},
	{
		name: 'Văn hóa các nước nói tiếng Anh',
		key: 'XN327',
	},
	{
		name: 'Chuyên đề Ngữ pháp nâng cao',
		key: 'XN328',
	},
	{
		name: 'Chuyên đề Ngữ âm nâng cao',
		key: 'XN329',
	},
	{
		name: 'Chuyên đề tiếng Anh định hướng việc làm',
		key: 'XN331',
	},
	{
		name: 'Văn học Anh-Mỹ',
		key: 'XN334',
	},
	{
		name: 'Tiếng Anh Du lịch 2',
		key: 'XN336',
	},
	{
		name: 'Thực tế xã hội học',
		key: 'XN341',
	},
	{
		name: 'Biên dịch Thư tín văn phòng',
		key: 'XN342',
	},
	{
		name: 'Lịch sử xã hội học',
		key: 'XN343',
	},
	{
		name: 'Xã hội học nông thôn',
		key: 'XN347',
	},
	{
		name: 'Xã hội học đô thị',
		key: 'XN348',
	},
	{
		name: 'Xã hội học văn hóa',
		key: 'XN352',
	},
	{
		name: 'Xã hội học gia đình',
		key: 'XN353',
	},
	{
		name: 'Xã hội học về giới',
		key: 'XN354',
	},
	{
		name: 'Xã hội học truyền thông đại chúng',
		key: 'XN355',
	},
	{
		name: 'Văn học châu Âu 3',
		key: 'XN358',
	},
	{
		name: 'Xã hội học y tế',
		key: 'XN366',
	},
	{
		name: 'Xã hội học về dư luận xã hội',
		key: 'XN371',
	},
	{
		name: 'Xã hội học lối sống',
		key: 'XN372',
	},
	{
		name: 'Xã hội học du lịch',
		key: 'XN373',
	},
	{
		name: 'Luận văn tốt nghiệp',
		key: 'XN381',
	},
	{
		name: 'Tiểu luận tốt nghiệp',
		key: 'XN382',
	},
	{
		name: 'Đa dạng sinh học',
		key: 'ZO892C',
	},
];

module.exports = courses;
