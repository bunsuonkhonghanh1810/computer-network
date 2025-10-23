// Dữ liệu đã được tổng hợp từ tất cả các file JSON bạn cung cấp
const ALL_QUESTIONS = [
  {
    "question": "Mạng máy tính là mạng Internet?",
    "answer": "A. Đúng"
  },
  {
    "question": "Thuật ngữ MAN là viết tắt của cụm từ nào?",
    "answer": "A. Metropolitan Area Network"
  },
  {
    "question": "LAN là thuật ngữ dùng để chỉ các máy tính kết nối với nhau trong phạm vi hẹp (dạng như trong văn phòng hay toà nhà)",
    "answer": "A. Đúng"
  },
  {
    "question": "Mạng Internet được hình thành từ sự kết nối của rất nhiều mạng, nhiều loại mạng khác nhau trên toàn thế giới.",
    "answer": "A. Đúng"
  },
  {
    "question": "Các dạng mạng máy tính có cấu trúc liên kết (dạng như Bus, Star, Ring,...) được phân loại dựa trên hình dạng kết nối các thiết bị?",
    "answer": "A. Đúng"
  },
  {
    "question": "Hub là một thiết bị đầu cuối.",
    "answer": "B. Sai"
  },
  {
    "question": "Thuật ngữ LAN (mạng cục bộ) là viết tắt của cụm từ nào?",
    "answer": "C. Local Area Network"
  },
  {
    "question": "Sự sắp xếp hình học của các thiết bị trên mạng được gọi là",
    "answer": "A. Topology"
  },
  {
    "question": "Thuật ngữ IANA là viết tắt của?",
    "answer": "A. Internet Assigned Numbers Authority"
  },
  {
    "question": "Node là một tên khác của",
    "answer": "B. Device"
  },
  {
    "question": "Tên của mạng đầu tiên (tiền thân của Internet) là gì?",
    "answer": "B. ARPANET"
  },
  {
    "question": "ISP là chữ viết tắt của?",
    "answer": "C. Internet Service Provider"
  },
  {
    "question": "Tổ chức nào sau đây KHÔNG phải là nhà cung cấp dịch vụ truy câp Internet tại Việt Nam?",
    "answer": "D. Vodaphone"
  },
  {
    "question": "Hai máy tính khác nhau có thể truyền thông với nhau nếu (Chọn phát biểu phù hợp nhất)",
    "answer": "C. Chúng cùng dùng một bộ giao thức"
  },
  {
    "question": "Các kiểu mạng LAN, MAN, WAN, GAN được phân biệt với nhau bởi tiêu chí nào dưới đây?",
    "answer": "A. Khoảng cách địa lý"
  },
  {
    "question": "Chọn các thành phần bên dưới là các thành phần chính của hệ thống mạng máy tính? (Chọn 3)",
    "answer": "A. Thiết bị đầu cuối\nB. Thiết bị mạng\nC. Kết nối"
  },
  {
    "question": "Kiến trúc mô hình phân cấp 3 lớp truyền thống gồm có lớp nào? (Chọn 3)",
    "answer": "A. Core\nC. Aggregation\nD. Access"
  },
  {
    "question": "Kết nối nào dưới đây là loại có dây – Wired (Chọn 3)",
    "answer": "A. Ethernet\nB. Fiber Optic\nC. Copper Cable"
  },
  {
    "question": "Những loại nào dưới đây là topology của một mạng LAN? (Chọn 3)",
    "answer": "B. Bus\nC. Ring\nD. Star"
  },
  {
    "question": "Các chức năng nào dưới đây nằm trong Hệ sinh thái Internet? (Chọn 3)",
    "answer": "A. Phát triển tiêu chuẩn mở\nC. Đặt tên và địa chỉ\nD. Dịch vụ và hoạt động chia sẻ toàn cầu"
  },
  {
    "question": "ISO là từ viết tắt của International Standard Organization?",
    "answer": "A. Đúng"
  },
  {
    "question": "Trong mô hình OSI, tầng Network có thể thông tin trực tiếp với các tầng Datalink và Transport trong cùng một thiết bị",
    "answer": "A. Đúng"
  },
  {
    "question": "Mô hình tham chiếu OSI được định nghĩa trong ISO/IEC 7498-1?",
    "answer": "A. Đúng"
  },
  {
    "question": "Trong hệ sinh thái Internet, VNNIC là NIR-National Internet Registry của Việt Nam?",
    "answer": "A. Đúng"
  },
  {
    "question": "Mô hình OSI có mấy tầng?",
    "answer": "D. 7 tầng"
  },
  {
    "question": "Thuật ngữ ISO là từ viết tắt của",
    "answer": "B. International Organizations for Standardization"
  },
  {
    "question": "Mô hình OSI được công nhận vào năm nào?",
    "answer": "C. 1984"
  },
  {
    "question": "Tầng nào trong mô hình OSI làm việc với các tín hiệu điện",
    "answer": "C. Physical"
  },
  {
    "question": "Thứ tự (từ trên xuống) của các tầng trong mô hình OSI là?",
    "answer": "C. Application, Presentation, Session, Transport, Network, Data Link, Physical"
  },
  {
    "question": "Chức năng của thiết bị Hub thông thường nằm ở tầng nào trong mô hình OSI?",
    "answer": "A. Tầng 1"
  },
  {
    "question": "Chức năng của thiết bị Switch thông thường nằm ở tầng nào trong mô hình OSI?",
    "answer": "B. Tầng 2"
  },
  {
    "question": "Các tầng nào dưới đây nằm trong mô hình tham chiếu OSI. (Chọn 3)",
    "answer": "A. Tầng Data Link\nB. Tầng Application\nD. Tầng Session"
  },
  {
    "question": "Tầng vận chuyển trong mô hình OSI thực hiện chức năng nào dưới đây. (Chọn 3)",
    "answer": "A. Kết nối End-to-End\nB. Kiểm soát lỗi\nD. Kiểm soát luồng dữ liệu"
  },
  {
    "question": "Các tầng nào dưới đây trong mô hình OSI KHÔNG thực hiện việc tạo khung? (Chọn 3)",
    "answer": "A. Tầng Ứng dụng\nB. Tầng Phiên\nC. Tầng Mạng"
  },
  {
    "question": "Trong mô hình TCP/IP, nó chia hoạt động truyền thông mạng thành 7 tầng",
    "answer": "B. Sai"
  },
  {
    "question": "Trong mô hình TCP/IP, Data là đơn vị dữ liệu giao thức tầng Ứng dụng.",
    "answer": "A. Đúng"
  },
  {
    "question": "Quá trình mở gói trong mô hình TCP/IP là quá trình loại bỏ thông tin bổ sung khi nó chuyển lên lớp trên.",
    "answer": "A. Đúng"
  },
  {
    "question": "Thứ tự (từ trên xuống) của các tầng trong mô hình TCP/IP là?",
    "answer": "D. Application – Transport – Internet – Network Access"
  },
  {
    "question": "Mô hình TCP/IP tương đương có mấy lớp?",
    "answer": "B. 5"
  },
  {
    "question": "Thứ tự (từ trên xuống) của các lớp trong mô hình TCP/IP là?",
    "answer": "C. Lớp ứng dụng - Lớp vận chuyển - Lớp Network - Lớp liên kết dữ liệu - Lớp vật lý"
  },
  {
    "question": "Thứ tự đúng của các đơn vị dữ liệu trong mô hình TCP/IP tương đương là?",
    "answer": "D. Data, Segment, Packet, Frame, Bit"
  },
  {
    "question": "Giao thức nào dưới đây nằm ở tầng Internet trong mô hình TCP/IP",
    "answer": "C. OSPF"
  },
  {
    "question": "Giao thức nào dưới đây dùng cho ứng dụng, dịch vụ Web",
    "answer": "D. REST"
  },
  {
    "question": "Đơn vị dữ liệu giao thức (PDU) của tầng Giao vận là",
    "answer": "C. Segment"
  },
  {
    "question": "Giao thức nào dưới đây dùng cho ứng dụng Email",
    "answer": "A. POP3"
  },
  {
    "question": "Để đảm bảo dữ liệu được gửi tới đúng đích, việc xác định địa chỉ dữ liệu được thực hiện ở ba lớp nào dưới đây trong mô hình TCP/IP? (Chọn 3)",
    "answer": "A. Lớp liên kết dữ liệu\nB. Lớp Internet\nC. Lớp Giao vận"
  },
  {
    "question": "Các tầng nào dưới đây nằm trong mô hình TCP/IP? (Chọn 3)",
    "answer": "A. Tầng Internet\nB. Tầng Network Access\nD. Tầng Application"
  },
  {
    "question": "Giao thức nào dưới đây nằm ở tầng Ứng dụng trong mô hình TCP/IP? (Chọn 3)",
    "answer": "B. HTTP\nC. TFTP"
  },
  {
    "question": "Giao thức nào dưới đây KHÔNG nằm ở tầng Vận chuyển trong mô hình TCP/IP? (Chọn 3)",
    "answer": "A. DNS\nB. DHCP\nC. SMTP"
  },
  {
    "question": "Chuyển đổi khung thành tín hiệu (quang, điện hoặc điện từ) dựa trên môi trường truyền là một trong những chức năng của tầng Vật lý?",
    "answer": "A. Đúng"
  },
  {
    "question": "Coaxial là một loại cáp dùng trong truyền thông mạng máy tính",
    "answer": "A. Đúng"
  },
  {
    "question": "Cáp đồng trục trong tầng vật lý của mô hình truyền thông có hai loại",
    "answer": "A. Đúng"
  },
  {
    "question": "Cáp xoắn có vỏ bọc chống nhiễu là UTP?",
    "answer": "B. Sai"
  },
  {
    "question": "https://i-speed.vn là một link truy cập công cụ đo kiểm chất lượng mạng?",
    "answer": "A. Đúng"
  },
  {
    "question": "Thông lượng (throughput) là",
    "answer": "A. Tốc độ truyền dữ liệu trên đường truyền"
  },
  {
    "question": "Phương thức giao tiếp trong đó việc truyền dữ liệu diễn ra theo cả hai hướng nhưng tại một thời điểm chỉ có một hướng được truyền dữ liệu, gọi là",
    "answer": "C. Half-duplex"
  },
  {
    "question": "Tốc độ truyền dữ liệu tối đa của kết nối Gigabit Ethernet là bao nhiêu?",
    "answer": "C. 1 Gbps"
  },
  {
    "question": "Các loại cáp nào dưới đây là cáp đồng trục dùng ở tầng vật lý trong mô hình truyền thông?",
    "answer": "B. Thicknet và Thinnet"
  },
  {
    "question": "Loại cáp nào dưới đây là cáp quang dùng ở tầng vật lý trong mô hình truyền thông?",
    "answer": "A. Multi-Mode"
  },
  {
    "question": "Thuật ngữ IEEE là từ viết tắt của",
    "answer": "A. Institute for Electrical and Electronic Engineers"
  },
  {
    "question": "Cáp xoắn có vỏ bọc chống nhiễu (STP) là",
    "answer": "D. Shielded Twisted Pair"
  },
  {
    "question": "Chuẩn nào dưới đây KHÔNG phải là một loại chuẩn cáp mạng?",
    "answer": "D. Category 11"
  },
  {
    "question": "Loại kết nối nào dưới đây là kết nối không dây tầm xa?",
    "answer": "B. Satellite"
  },
  {
    "question": "Tầng Vật Lý (Physical Layer) làm nhiệm vụ nào dưới đây. (Chọn 3)",
    "answer": "A. Truyền luồng bit qua môi trường vật lý.\nB. Tiêu chuẩn hoá các chức năng tầng vật lý như cáp, volt, giao diện\nD. Việc truyền dữ liệu được thực hiện bởi hệ thống có dây hoặc không dây"
  },
  {
    "question": "Loại kết nối nào dưới đây là kết nối không dây tầm ngắn? (Chọn 3)",
    "answer": "A. RFID\nB. Wifi\nC. Bluetooth"
  },
  {
    "question": "Các yếu tố nào dưới đây ảnh hưởng tới tốc độ truyền luồng bits? (Chọn 3)",
    "answer": "B. Suy hao\nC. Băng thông"
  },
  {
    "question": "Một trong những chức năng của tầng liên kết dữ liệu là phát hiện lỗi.",
    "answer": "A. Đúng"
  },
  {
    "question": "Ethernet là một loại giao thức trong tầng liên kết dữ liệu",
    "answer": "A. Đúng"
  },
  {
    "question": "PDU được sử dụng ở tầng liên kết dữ liệu gọi là Bits",
    "answer": "B. Sai"
  },
  {
    "question": "Cấu trúc khung tầng liên kết dữ liệu có trường tiêu đề (header) và phần đuôi (trailer)",
    "answer": "A. Đúng"
  },
  {
    "question": "Quá trình dữ liệu di chuyển từ tầng trên xuống tầng datalink phải thực hiện việc?",
    "answer": "D. Đóng gói dữ liệu"
  },
  {
    "question": "Đơn vị dữ liệu tầng datalink là:",
    "answer": "C. Frame"
  },
  {
    "question": "Frame là dữ liệu ở tầng:",
    "answer": "C. Data Link"
  },
  {
    "question": "Card mạng là thiết bị nằm ở tầng nào trong mô hình OSI:",
    "answer": "B. Data Link"
  },
  {
    "question": "Tầng nào cung cấp dịch vụ truyền tin tin cậy qua môi trường vật lý:",
    "answer": "B. Data link"
  },
  {
    "question": "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp? (Chọn 3)",
    "answer": "A. Tạo khung\nB. Xác định địa chỉ vật lý\nC. Kiểm soát lỗi"
  },
  {
    "question": "Các giao thức nào dưới đây nằm ở tầng liên kết dữ liệu? (Chọn 3)",
    "answer": "B. Ethernet\nC. Token ring\nD. PPP"
  },
  {
    "question": "CSMA/CD là giao thức truy cập ngẫu nhiên",
    "answer": "A. Đúng"
  },
  {
    "question": "NIC là viết tắt của Network Interface Card",
    "answer": "A. Đúng"
  },
  {
    "question": "Mỗi NIC (Network Interface Card) có thể có nhiều địa chỉ MAC",
    "answer": "B. Sai"
  },
  {
    "question": "LLC là một lớp con (sublayer) trong tầng liên kết dữ liệu",
    "answer": "A. Đúng"
  },
  {
    "question": "Khi địa chỉ MAC đích là Broadcast, nó được dùng để gửi tới một địa chỉ đích duy nhất trong mạng LAN",
    "answer": "B. Sai"
  },
  {
    "question": "Câu nào đúng về địa chỉ MAC?",
    "answer": "C. Ba bytes cuối trong địa chỉ MAC được gán bởi nhà sản xuất thiết bị."
  },
  {
    "question": "Công nghệ Ethernet sử dụng phương pháp truy nhập đường truyền nào sau đây:",
    "answer": "C. CSMA/CD"
  },
  {
    "question": "CSMA/CD là viết tắt của:",
    "answer": "C. Carrier Sense Multiple Access / Collision Detection"
  },
  {
    "question": "Chuỗi số “00-08-ac-41-5d-9f” có thể là:",
    "answer": "C. Địa chỉ MAC"
  },
  {
    "question": "Chuẩn nào dưới đây đặc tả về chuẩn kiến trúc mạng cục bộ cho Ethernet, bao gồm các chuẩn tầng vật lý và tầng con MAC:",
    "answer": "B. IEEE 802.3"
  },
  {
    "question": "Chọn phát biểu ĐÚNG về địa chỉ MAC:",
    "answer": "A. Được gắn trên card mạng (NIC)"
  },
  {
    "question": "Công nghệ nào dưới đây được sử dụng phổ biến nhất trong mạng LAN hiện nay:",
    "answer": "C. Ethernet"
  },
  {
    "question": "LLC là viết tắt của:",
    "answer": "A. Logical Link Control"
  },
  {
    "question": "Địa chỉ MAC nào có dưới đây KHÔNG trong tiêu đề của Frame? (Chọn 3)",
    "answer": "B. MAC Gateway\nD. MAC Default"
  },
  {
    "question": "Các loại địa chỉ MAC bao gồm? (Chọn 3)",
    "answer": "A. MAC unicast\nB. MAC multicast\nC. MAC broadcast"
  },
  {
    "question": "Tốc độ của GigabitEthernet có thể lên đến 10000Mbps?",
    "answer": "B. Sai"
  },
  {
    "question": "Thiết bị chuyển mạch lớp 2 hoạt động kém hiệu quả hơn so với Hub?",
    "answer": "B. Sai"
  },
  {
    "question": "Mac Address Table được lưu trữ trong RAM của Switch?",
    "answer": "A. Đúng"
  },
  {
    "question": "Một thiết bị chuyển mạch lớp 2 có thể hỗ trợ các loại cổng:",
    "answer": "D. Cổng access và trunk"
  },
  {
    "question": "Thiết bị Switch thông thường nằm ở tầng nào của mô hình OSI?",
    "answer": "B. Tầng 2"
  },
  {
    "question": "Để hạn chế sự đụng độ (hay va chạm) giữa các gói tin trong mạng người ta sử dụng thiết bị nào dưới đây?",
    "answer": "C. Switches"
  },
  {
    "question": "Địa chỉ nào được quan tâm khi một frame đi vào cổng của Switch?",
    "answer": "D. Địa chỉ MAC đích"
  },
  {
    "question": "Các thiết bị nào dưới đây không được sử dụng để hạn chế sự đụng độ của các gói tin trong mạng? (Chọn 3)",
    "answer": "A. Repeaters\nB. Hubs\nC. Card mạng (NIC)"
  },
  {
    "question": "Một miền quảng bá có tính chất như sau (Chọn 3)",
    "answer": "A. Phạm vi truy cập của các gói Broadcast\nB. Các thiết bị trong cùng một miền quảng bá có thể nhận gói quảng bá\nC. Bộ định tuyến phân tách các miền quảng bá bằng interface"
  },
  {
    "question": "Các cách xử lý frame khi đi vào giao diện trên Switch? (Chọn 3)",
    "answer": "A. Flooding\nC. Forwarding\nD. Discarding"
  },
  {
    "question": "Các chức năng đặc thù của thiết bị chuyển mạch lớp 2? (Chọn 3)",
    "answer": "B. Học địa chỉ\nC. Quyết định chuyển tiếp/lọc khung\nD. Tránh Loop"
  },
  {
    "question": "Các loại cổng Ethernet nào dưới đây dùng để truyền dữ liệu trong mạng LAN? (Chọn 3)",
    "answer": "A. FastEthernet\nB. GigabitEthernet\nC. Ten Gigabit Ethernet"
  },
  {
    "question": "VLAN là một mạng LAN ảo",
    "answer": "A. Đúng"
  },
  {
    "question": "Dữ liệu ở VLAN gốc không được trao đổi qua kết nối Trunking",
    "answer": "B. Sai"
  },
  {
    "question": "IEEE 802.1Q có tên gọi khác là dot1Q",
    "answer": "A. Đúng"
  },
  {
    "question": "Thiết bị Hub có bao nhiêu collision domain?",
    "answer": "A. 1"
  },
  {
    "question": "Thiết bị Switch có bao nhiêu collision domain?",
    "answer": "C. 1 collision / 1port"
  },
  {
    "question": "Thiết bị Switch (cấu hình mặc định) có bao nhiêu Broadcast domain?",
    "answer": "A. 1"
  },
  {
    "question": "Thiết bị Hub có bao nhiêu Broadcast domain?",
    "answer": "A. 1"
  },
  {
    "question": "Virtual LAN (VLAN) là một nhóm các thiết bị kết nối trong cùng miền nào dưới đây?",
    "answer": "B. Miền quảng bá"
  },
  {
    "question": "Một mạng chứa nhiều VLAN trải rộng trên nhiều thiết bị chuyển mạch (trong các VLAN có VLAN 20). Điều gì xảy ra khi một thiết bị trong VLAN 20 gửi khung Ethernet quảng bá?",
    "answer": "C. Chỉ các thiết bị trong VLAN 20 mới nhìn thấy frame."
  },
  {
    "question": "Trong Switch Cisco, VLAN mặc định là:",
    "answer": "A. VLAN 1"
  },
  {
    "question": "Lợi ích của việc sử dụng VLAN là gì? (Chọn 3)",
    "answer": "A. Tăng cường bảo mật\nB. Giảm chi phí, tăng hiệu suất\nC. Dễ quản lý"
  },
  {
    "question": "Các dãy giá trị nào dưới đây thoả mãn là VLAN-ID? (Chọn 3)",
    "answer": "A. 1-1001\nB. 1002-1005\nC. 1006-4094"
  },
  {
    "question": "Phát biểu nào sau đây là SAI: khi Switch nhận được một frame gửi tới nó, Switch sẽ xử lý như thế nào nếu địa chỉ MAC đích trong frame không có trong bảng địa chỉ MAC của nó? (Chọn 3)",
    "answer": "A. Switch sẽ chuyển frame đến địa chỉ default gateway\nB. Switch sẽ chuyển frame đến cổng gần nhất\nC. Switch sẽ hủy bỏ frame này"
  },
  {
    "question": "UDP và TCP là các giao thức nằm ở tầng giao vận?",
    "answer": "A. Đúng"
  },
  {
    "question": "Các ứng dụng trao đổi dữ liệu giữa hai máy đều liên quan tới số hiệu cổng tầng giao vận",
    "answer": "A. Đúng"
  },
  {
    "question": "Tầng giao vận đảm bảo dữ liệu có thể được tập hợp lại một cách chính xác ở bên nhận bằng các quá trình phân mảnh (hoặc phân đoạn) và tập hợp lại?",
    "answer": "A. Đúng"
  },
  {
    "question": "Địa chỉ Default Gateway là một thành phần của Socket?",
    "answer": "B. Sai"
  },
  {
    "question": "Phát biểu nào sau đây (tầng giao vận) là sai:",
    "answer": "C. Port có giá trị từ 1 đến 1023"
  },
  {
    "question": "Port mặc định của HTTP server là:",
    "answer": "A. TCP/80"
  },
  {
    "question": "Phát biểu nào dưới đây là đúng với số hiệu cổng (port number):",
    "answer": "D. Liên kết với giao thức tầng Giao vận để xác định một ứng dụng"
  },
  {
    "question": "Để phát hiện lỗi trong khi truyền segment ở tầng giao vận, người ta sử dụng kỹ thuật:",
    "answer": "D. Checksum"
  },
  {
    "question": "Giao thức tầng giao vận nào sau đây được sử dụng trong mạng?",
    "answer": "C. TCP và UDP"
  },
  {
    "question": "Các giao thức tầng giao vận xử lý vấn đề nào sau đây?",
    "answer": "B. Giao tiếp giữa tiến trình với tiến trình"
  },
  {
    "question": "Điểm truy cập dịch vụ ở tầng giao vận có tên là?",
    "answer": "A. Port"
  },
  {
    "question": "Chức năng của tầng giao vận:",
    "answer": "C. Thực hiện việc tạo luồng dữ liệu kết nối giữa các đầu cuối"
  },
  {
    "question": "Ưu điểm của dịch vụ không kết nối (Connectionless service) khi so sánh với dịch vụ hướng kết nối (Connection-oriented service) ở tầng giao vận là",
    "answer": "C. Không mất thời gian thiết lập và quản lý kết nối"
  },
  {
    "question": "Nhiệm vụ nào dưới đây là của các tầng giao vận?",
    "answer": "B. Phân tách các luồng dữ liệu"
  },
  {
    "question": "Thông tin nào dưới đây KHÔNG có trong tiêu đề của hai giao thức cơ bản ở tầng giao vận?",
    "answer": "A. Sequence number"
  },
  {
    "question": "Dải số hiệu cổng thông dụng được sử dụng trong tầng giao vận (TCP và UDP) là:",
    "answer": "B. 0 - 1023"
  },
  {
    "question": "Ở tầng giao vận, socket là:",
    "answer": "C. Sự kết hợp giữa địa chỉ IP, số hiệu cổng và giao thức tầng giao vận"
  },
  {
    "question": "Loại số hiệu cổng nào được IANA chỉ định cho các dịch vụ và ứng dụng thường được sử dụng?",
    "answer": "C. Well-known port"
  },
  {
    "question": "Tầng giao vận sử dụng cổng 53 để mô tả giao thức nào?",
    "answer": "D. DNS"
  },
  {
    "question": "Nhiệm vụ chính trong tầng giao vận (Chọn 3)",
    "answer": "A. Theo dõi giao tiếp\nB. Phân mảnh (hoặc phân đoạn) dữ liệu\nC. Xác định các ứng dụng"
  },
  {
    "question": "Các phát biểu nào sau đây liên quan tới số hiệu cổng (Chọn 3)",
    "answer": "A. Mỗi số hiệu cổng được hiển thị bằng một số nguyên không dấu\nD. Số hiệu cổng được dùng để xác định một ứng dụng"
  },
  {
    "question": "Dữ liệu được đóng gói trong tầng Giao vận KHÔNG được gọi là (Chọn 3)",
    "answer": "A. Segment hoặc Datagrama\nD. Segmen hoặc Datagrama"
  },
  {
    "question": "UDP quản lý và theo dõi thứ tự Datagram",
    "answer": "B. Sai"
  },
  {
    "question": "UDP phải sắp xếp lại Datagram theo thứ tự truyền",
    "answer": "B. Sai"
  },
  {
    "question": "Một trong các nhiệm vụ của UDP thiết lập phiên trước khi truyền dữ liệu giữa 2 thiết bị đầu cuối",
    "answer": "B. Sai"
  },
  {
    "question": "UDP không có cơ chế phát hiện lỗi",
    "answer": "A. Đúng"
  },
  {
    "question": "UDP là giao thức truyền tin tin cậy",
    "answer": "B. Sai"
  },
  {
    "question": "Ứng dụng nào sau đây phù hợp nhất với UDP:",
    "answer": "A. Video Conference"
  },
  {
    "question": "Giao thức UDP được gọi là không kết nối vì lý do nào sau đây",
    "answer": "A. Các gói UDP được xử lý độc lập bởi lớp vận chuyển"
  },
  {
    "question": "Số hiệu cổng được sử dụng bởi Giao thức Network Time Protocol (NTP) với UDP là?",
    "answer": "B. 123"
  },
  {
    "question": "Cổng kết nối ở tầng Transport (giao thức UDP) của giao thức SNMP là",
    "answer": "C. UDP/161"
  },
  {
    "question": "Đặc điểm của giao thức UDP là gì?",
    "answer": "C. Không truyền lại các gói dữ liệu bị lỗi"
  },
  {
    "question": "Loại ứng dụng nào phù hợp nhất để sử dụng UDP?",
    "answer": "A. Các ứng dụng nhạy cảm với độ trễ"
  },
  {
    "question": "Hoạt động nào được máy khách thực hiện khi thiết lập liên lạc với máy chủ thông qua việc sử dụng UDP ở tầng giao vận?",
    "answer": "C. Máy khách chọn ngẫu nhiên một số hiệu cổng"
  },
  {
    "question": "Tại sao UDP lại phù hợp làm giao thức tầng giao vận cho các ứng dụng như video, voice?",
    "answer": "A. UDP đáp ứng nhanh và ít tiêu tốn tài nguyên."
  },
  {
    "question": "Đặc điểm của UDP là gì?",
    "answer": "D. Nó cung cấp khả năng phân phối các segment một cách không tin cậy"
  },
  {
    "question": "Các ứng dụng sử dụng giao thức UDP là (Chọn 3)",
    "answer": "A. Ứng dụng video và đa phương tiện trực tiếp\nB. Ứng dụng yêu cầu và trả lời đơn giản\nC. Các ứng dụng tự xử lý độ tin cậy"
  },
  {
    "question": "Các giao thức nào chỉ sử dụng UDP (Chọn 3)",
    "answer": "A. DHCP\nB. TFTP\nC. NTP"
  },
  {
    "question": "Phát biểu nào dưới đây là đúng khi nói về giao thức UDP (Chọn 3)",
    "answer": "A. Không có giai đoạn thiết lập kết nối\nB. Không duy trì trạng thái kết nối\nC. Không kiểm soát tốc độ gửi"
  },
  {
    "question": "Các thành phần nằm trong UDP Header là (Chọn 3)",
    "answer": "A. Source Port\nB. Checksum\nC. Length"
  },
  {
    "question": "Chức năng của giao thức UDP là (Chọn 3)",
    "answer": "A. Dữ liệu được xây dựng lại theo thứ tự nhận được.\nB. Bất kỳ datagram nào bị mất sẽ không được gửi lại.\nC. Không thiết lập phiên"
  },
  {
    "question": "Giao thức TCP sử dụng cửa sổ trượt để kiểm soát luồng",
    "answer": "A. Đúng"
  },
  {
    "question": "Trong giao thức TCP, các gói tin được gọi là segment",
    "answer": "A. Đúng"
  },
  {
    "question": "TCP là một giao thức không tin cậy?",
    "answer": "B. Sai"
  },
  {
    "question": "TCP không có chức năng sắp xếp lại các segment",
    "answer": "B. Sai"
  },
  {
    "question": "TCP sử dụng cơ chế cửa sổ trượt để điều khiển tốc độ truyền dữ liệu",
    "answer": "A. Đúng"
  },
  {
    "question": "Trong TCP, việc gửi và nhận dữ liệu được thực hiện dưới dạng",
    "answer": "A. Dòng bytes"
  },
  {
    "question": "Một máy khách đã thực hiện yêu cầu HTTP tới trình duyệt web. Số hiệu địa chỉ cổng thông dụng nào được liên kết với địa chỉ đích?",
    "answer": "D. TCP/80"
  },
  {
    "question": "Ứng dụng nào sau đây không phù hợp với giao thức TCP?",
    "answer": "B. Hệ thống hội thảo video trực tuyến"
  },
  {
    "question": "Acknowledgment number trong tiêu đề TCP là một số",
    "answer": "C. Liên quan tới số SeqN của bên gửi"
  },
  {
    "question": "Byte dữ liệu được truyền trong mỗi kết nối được đánh số bởi TCP. Những con số này có dạng?",
    "answer": "D. Chuỗi số 0 và số 1"
  },
  {
    "question": "Cổng kết nối của giao thức SMTP là",
    "answer": "C. TCP/25"
  },
  {
    "question": "Quá trình bộ nhận kiểm soát lượng dữ liệu được gửi bởi người gửi được gọi là?",
    "answer": "A. Điều khiển luồng"
  },
  {
    "question": "Thông số nào được nút nguồn lựa chọn ngẫu nhiên trước khi gửi dữ liệu",
    "answer": "D. Cổng nguồn."
  },
  {
    "question": "Trường thông tin Sequence Number trong tiêu đề của giao thức TCP dùng để làm gì?",
    "answer": "A. Lưu số thứ tự của gói tin"
  },
  {
    "question": "Trường nào trong tiêu đề TCP được sử dụng để bắt đầu quá trình bắt tay ba bước?",
    "answer": "D. SYN"
  },
  {
    "question": "Các chức năng trong giao thức TCP là (Chọn 3)",
    "answer": "A. Thiết lập phiên\nB. Đảm bảo tin cậy\nC. Điều khiển luồng"
  },
  {
    "question": "Các dịch vụ sử dụng giao thức TCP là (Chọn 3)",
    "answer": "A. FTP\nB. HTTP\nC. SMTP"
  },
  {
    "question": "Ba trường nào sau đây có trong tiêu đề TCP? (Chọn 3)",
    "answer": "B. SYN\nC. FIN\nD. URG"
  },
  {
    "question": "Các ý nào dưới đây nằm trong quá trình kết thúc phiên kết nối (Chọn 3)",
    "answer": "A. Khi Client không còn dữ liệu để gửi, nó sẽ gửi một segment có gán cờ FIN\nB. Server gửi lại ACK để xác nhận đã nhận được FIN để chấm dứt phiên kết nối\nD. Client gửi lại ACK để xác nhận đã nhận được FIN từ Server"
  },
  {
    "question": "Lớp mạng cho phép kết nối các thiết bị với nhau",
    "answer": "A. Đúng"
  },
  {
    "question": "Định tuyến là một trong bốn hoạt động cơ bản của tầng mạng:",
    "answer": "A. Đúng"
  },
  {
    "question": "IPv6 là một giao thức nằm ở tầng Internet",
    "answer": "A. Đúng"
  },
  {
    "question": "Đặc điểm của lớp mạng là chuyển dữ liệu thành dạng tín hiệu để truyền qua mạng",
    "answer": "B. Sai"
  },
  {
    "question": "Chuyển tiếp không phải là một trong những hoạt động cơ bản của lớp mạng",
    "answer": "B. Sai"
  },
  {
    "question": "IPX không phải là một giao thức kết nối mạng",
    "answer": "B. Sai"
  },
  {
    "question": "Giao thức định tuyến được dùng để",
    "answer": "B. Trao đổi thông tin định tuyến giữa các thiết bị định tuyến trên mạng"
  },
  {
    "question": "Đơn vị dữ liệu thông tin ở tầng Mạng trong mô hình OSI được gọi là gì?",
    "answer": "C. Packet"
  },
  {
    "question": "Trong những công việc sau, công việc nào không phải là chức năng của tầng Mạng",
    "answer": "B. Đặt tên gợi nhớ cho máy tính"
  },
  {
    "question": "Giao thức ICMP nằm ở tầng nào:",
    "answer": "A. Tầng Network"
  },
  {
    "question": "Những giao thức nào dưới đây là giao thức định tuyến (Chọn 3)",
    "answer": "A. BGP\nB. OSPF\nC. IGRP"
  },
  {
    "question": "Những giao thức nào dưới đây là giao thức kết nối mạng (Chọn 3)",
    "answer": "A. IPX\nB. IPv6\nC. Apple Talk"
  },
  {
    "question": "Giao thức nào dưới đây không phải là giao thức định tuyến (Chọn 3)",
    "answer": "A. IPv6\nC. IPv4\nD. SNMP"
  },
  {
    "question": "Đặc điểm của tầng Mạng là: (Chọn 3)",
    "answer": "A. Cho phép kết nối các thiết bị với nhau\nB. Các gói được gửi từ nguồn tới đích bằng cách sử dụng địa chỉ\nC. Nằm giữa tầng Giao vận và tầng Liên kết dữ liệu"
  },
  {
    "question": "Địa chỉ IPv6 có độ dài 128 bits",
    "answer": "A. Đúng"
  },
  {
    "question": "Địa chỉ IPv4 có độ dài là 64 bits",
    "answer": "B. Sai"
  },
  {
    "question": "192.168.0.0/24 là một địa chỉ public (địa chỉ công cộng)",
    "answer": "B. Sai"
  },
  {
    "question": "Địa chỉ mạng và địa chỉ quảng bá (ở lớp mạng) không được gán cho các thiết bị",
    "answer": "A. Đúng"
  },
  {
    "question": "Địa chỉ IP không thay đổi từ nguồn tới đích:",
    "answer": "A. Đúng"
  },
  {
    "question": "IETF là một trong số nhiều tổ chức chịu trách nhiệm về việc xác định các tiêu chuẩn liên quan tới bộ giao thức TCP/IP",
    "answer": "A. Đúng"
  },
  {
    "question": "Địa chỉ IPv6 nguồn phải là địa chỉ multicast",
    "answer": "B. Sai"
  },
  {
    "question": "Địa chỉ IPv6 gồm bao nhiêu bit:",
    "answer": "C. 128"
  },
  {
    "question": "Địa chỉ IP nào dưới đây được biểu diễn ở dạng (dotted-decimal) số thập phân – chấm:",
    "answer": "A. 102.61.91.0"
  },
  {
    "question": "Địa chỉ IP của PC nào dưới đây KHÔNG được biểu diễn ở dạng CIDR:",
    "answer": "A. 202.57.134.19"
  },
  {
    "question": "Thông tin nào sau đây là địa chỉ IP hợp lệ:",
    "answer": "A. 191.255.33.7"
  },
  {
    "question": "Giả sử máy A có địa chỉ 172.29.14.11/24 và máy B có địa chỉ 172.29.14.100/24. Tại máy A, để kiểm tra xem có thể gửi dữ liệu đến máy B được hay không, ta dùng lệnh nào:",
    "answer": "B. Ping 172.29.14.100"
  },
  {
    "question": "Sử dụng các quy tắc rút gọn để biểu diễn địa chỉ IPv6 sau: “0800:0000:0000:0000:0123:0000:0000:CDEF”:",
    "answer": "B. 800::123:0:0:CDEF"
  },
  {
    "question": "Địa chỉ logic (hay địa chỉ IP) sẽ được đóng gói ở tầng nào của mô hình OSI?",
    "answer": "C. Tầng mạng"
  },
  {
    "question": "Loại địa chỉ nào được sử dụng để gán cho thiết bị máy chủ để truyền dữ liệu ở Tầng Mạng?",
    "answer": "B. Địa chỉ logic (địa chỉ IP)"
  },
  {
    "question": "Phần nào là thành phần cố định trong địa chỉ IPv4?",
    "answer": "B. Phần mạng"
  },
  {
    "question": "Phát biểu nào dưới đây là đúng:",
    "answer": "A. Địa chỉ IPv6 được biểu thị bằng số thập lục phân."
  },
  {
    "question": "Các đặc điểm cơ bản của giao thức Internet là (Chọn 3)",
    "answer": "A. Không kết nối\nB. Không tin cậy\nC. Không phụ thuộc vào môi trường"
  },
  {
    "question": "Những địa chỉ IP nào sau đây là địa chỉ public (Chọn 3)",
    "answer": "A. 112.64.12.29\nC. 198.234.12.95\nD. 212.193.48.254"
  },
  {
    "question": "Ưu điểm của địa chỉ IPv6 so với IPv4 (Chọn 3)",
    "answer": "A. Tăng không gian địa chỉ\nB. Bảo mật tốt hơn\nC. Hỗ trợ di động tốt hơn"
  },
  {
    "question": "Địa chỉ IP nào sau đây KHÔNG là địa chỉ dạng Private? (Chọn 3)",
    "answer": "B. 172.40.150.17/16\nC. 172.50.150.17/16\nD. 172.60.150.17/16"
  },
  {
    "question": "Địa chỉ nào sau đây KHÔNG phải là địa chỉ mạng của host 12.16.25.14/30 (Chọn 3)",
    "answer": "A. 12.16.25.4/30\nB. 12.16.25.6/30\nC. 12.16.25.8/30"
  },
  {
    "question": "Địa chỉ nào sau đây KHÔNG phải là địa chỉ quảng bá của mạng 19.18.25.128/27 (Chọn 3)",
    "answer": "A. 19.18.25.255/27\nB. 19.18.25.128/27\nC. 19.18.25.100/27"
  },
  {
    "question": "Các loại địa chỉ IPv6 là (Chọn 3)",
    "answer": "A. Unicast\nB. Multicast\nC. Anycast"
  },
  {
    "question": "Để các gói được gửi đến một đích ở xa, ba thông tin nào phải được cấu hình trên máy chủ? (Chọn 3)",
    "answer": "B. Địa chỉ IP\nC. Subnetmask\nD. Default Gateway"
  },
  {
    "question": "OSPF là một giao thức định tuyến?",
    "answer": "A. Đúng"
  },
  {
    "question": "Hệ thống tự trị (AS) được điều hành bởi nhiều tổ chức?",
    "answer": "B. Sai"
  },
  {
    "question": "Có 3 loại ASN?",
    "answer": "B. Sai"
  },
  {
    "question": "Nếu dữ liệu liên tục thay đổi hướng khi tới đích, chứng tỏ quá trình định tuyến là động?",
    "answer": "A. Đúng"
  },
  {
    "question": "IGRP là giao thức định tuyến sử dụng thuật toán tính đường đi tốt nhất tới đích.",
    "answer": "B. Sai"
  },
  {
    "question": "Giao thức định tuyến động tự động chia sẻ thông tin định tuyến giữa các bộ định tuyến (Routers).",
    "answer": "A. Đúng"
  },
  {
    "question": "Số hiệu mạng (ASN) được cấp và quản lý bởi IANA",
    "answer": "A. Đúng"
  },
  {
    "question": "Khi sử dụng định tuyến tĩnh, người quản trị phải cấu hình thủ công trên bộ định tuyến",
    "answer": "A. Đúng"
  },
  {
    "question": "Giao thức định tuyến động là một tập hợp các tiến trình, thuật toán, bản tin được sử dụng để trao đổi thông tin định tuyến và lựa chọn đường đi tốt nhất cập nhật vào bảng định tuyến.",
    "answer": "A. Đúng"
  },
  {
    "question": "Một máy tính trong một mạng đang liên lạc với một nhóm máy tính cụ thể. Đây là loại giao tiếp gì?",
    "answer": "B. Multicast"
  },
  {
    "question": "Khả năng định tuyến được thực hiện bởi thiết bị:",
    "answer": "D. Router"
  },
  {
    "question": "Chức năng của default gateway trong bảng định tuyến của Router là:",
    "answer": "A. Chỉ định đến địa chỉ tiếp theo (next hop) của gói dữ liệu nếu router không biết đường gửi đến đích"
  },
  {
    "question": "Định tuyến tĩnh là loại định tuyến:",
    "answer": "C. Chỉ rõ đường đi trên mạng cho gói tin"
  },
  {
    "question": "Trong quá trình chuyển tiếp lưu lượng, Router sẽ làm gì ngay sau khi khớp địa chỉ IP đích với mạng trên mục nhập bảng định tuyến được kết nối trực tiếp?",
    "answer": "C. Chuyển packet sang interface được kết nối trực tiếp"
  },
  {
    "question": "Địa chỉ IPv6 nào dưới đây thuộc nhóm IPv6 unicast là:",
    "answer": "B. Loopback"
  },
  {
    "question": "Thiết bị IPv6 gửi gói dữ liệu có địa chỉ đích là FF02::1. Mục tiêu của gói này là gì?",
    "answer": "B. Tất cả các nút kích hoạt IPv6 trên liên kết cục bộ"
  },
  {
    "question": "Chức năng của Router là gì?",
    "answer": "A. Nó kết nối nhiều mạng IP."
  },
  {
    "question": "Loại địa chỉ IPv6 nào được yêu cầu bắt buộc trên các giao diện hỗ trợ IPv6?",
    "answer": "C. link-local"
  },
  {
    "question": "Loại định tuyến nào cho phép Router chuyển tiếp gói tin ngay cả khi nó không có thông tin về mạng đích?",
    "answer": "B. default route"
  },
  {
    "question": "Giao thức định tuyến động thực hiện nhiệm vụ gì:",
    "answer": "B. Tự động trao đổi thông tin định tuyến"
  },
  {
    "question": "Mục đích của giao thức định tuyến là: (Chọn 3)",
    "answer": "A. Trao đổi thông tin giữa các thiết bị định tuyến\nB. Tăng tính hiệu quả giao tiếp giữa các máy tính\nC. Tìm đường đi tối ưu"
  },
  {
    "question": "Dải địa chỉ liên kết cục bộ nào KHÔNG thể được gán cho interface hỗ trợ IPv6? (Chọn 3)",
    "answer": "A. FEC0::/10\nB. FE80::/8\nD. FEC0::/8"
  },
  {
    "question": "Địa chỉ nào không phải là địa mạng cho địa chỉ 2001:DB8:BC15:A:12AB::1/64: (Chọn 3)",
    "answer": "A. 2001:DB8:BC15::0/64\nC. 2001:DB8:BC15:A:1::1/64\nD. 2001:DB8:BC15:A:12::0/64"
  },
  {
    "question": "Các thuật toán tính toán đường đi tốt nhất tới đích là: (Chọn 3)",
    "answer": "A. Thuật toán khoảng cách - véc tơ\nB. Thuật toán trạng thái đường\nC. Thuật toán đường đi tốt nhất"
  },
  {
    "question": "Mục đích của giao thức định tuyến động là: (Chọn 3)",
    "answer": "A. Khám phá các mạng ở xa\nB. Tìm đường đi tối ưu\nC. Duy trì thông tin định tuyến"
  },
  {
    "question": "Các giao thức định tuyến là: (Chọn 3)",
    "answer": "A. IGP\nB. EGP\nC. BGP"
  },
  {
    "question": "Các loại giao thức định tuyến là (Chọn 3)",
    "answer": "A. Định tuyến tĩnh\nB. Định tuyến động\nC. Định tuyến mặc định"
  },
  {
    "question": "Các giao thức nào dưới đây dùng thuật toán khoảng cách - véc tơ (Chọn 3)",
    "answer": "A. RIPv1\nB. RIPv2\nC. IGRP"
  },
  {
    "question": "Các chức năng trong giao thức định tuyến động (Chọn 3)",
    "answer": "A. Tự động chia sẻ thông tin định tuyến giữa các Routers\nB. Tự động cập nhật bảng định tuyến khi kết nối thay đổi\nC. Tìm đường đi tốt nhất tới đích"
  },
  {
    "question": "Chuyển tiếp là một nhiệm vụ của Router:",
    "answer": "A. Đúng"
  },
  {
    "question": "Router có chức năng định tuyến:",
    "answer": "A. Đúng"
  },
  {
    "question": "Câu lệnh để hiển thị bảng định tuyến trên Router Cisco 2811 là “show ip cef”",
    "answer": "A. Đúng"
  },
  {
    "question": "Thiết bị nào thực hiện chức năng xác định đường đi cho gói tin qua mạng?",
    "answer": "A. Router"
  },
  {
    "question": "Nếu Default Gateway được cấu hình không chính xác trên các máy tính thì hiện tượng gì sẽ xảy ra ?",
    "answer": "B. Máy có thể giao tiếp với các máy khác trên mạng cục bộ nhưng không thể giao tiếp với các máy trên mạng từ xa."
  },
  {
    "question": "Quản trị mạng cấu hình router bằng lệnh “ip route 0.0.0.0 0.0.0.0 209.165.200.226”, mục đích của lệnh này là gì?",
    "answer": "D. Để cung cấp một tuyến chuyển tiếp các gói, khi không có tuyến đường nào phù hợp với nó trong bảng định tuyến"
  },
  {
    "question": "Đâu là những trường thông tin được ghi trong bảng định tuyến (Chọn 3)",
    "answer": "A. Destination\nB. Next-Hop\nC. Outgoing Interface"
  },
  {
    "question": "Những câu lệnh nào dùng để thoát trong Router: (Chọn 3)",
    "answer": "B. end\nC. exit\nD. off"
  },
  {
    "question": "Những lệnh sau, lệnh nào được sử dụng trên thiết bị Router (Chọn 3)",
    "answer": "A. show ip\nB. show ip cef\nD. show ipv4"
  },
  {
    "question": "Đâu là các tham số được sử dụng để hiển thị trong bảng định tuyến (Chọn 3)",
    "answer": "A. S\nB. C\nC. *"
  }
]