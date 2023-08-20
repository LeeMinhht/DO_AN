//package poly.edu.restController;
//
//import com.vnua.edu.hieu.config.Environment;
//import com.vnua.edu.hieu.enums.RequestType;
//import com.vnua.edu.hieu.models.PaymentResponse;
//import com.vnua.edu.hieu.models.QueryStatusTransactionResponse;
//import com.vnua.edu.hieu.processor.CreateOrderMoMo;
//import com.vnua.edu.hieu.processor.QueryTransactionStatus;
//import org.hibernate.cfg.Environment;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import poly.edu.dto.OrderDto;
//import poly.edu.dto.PaymentDto;
//import poly.edu.dto.ResponsePayment;
//import poly.edu.model.Customer;
//import poly.edu.model.Transaction;
//import poly.edu.responsitory.TransactionRepository;
//import poly.edu.service.CustomerService;
//
//import java.util.Date;
//
//@RestController
//@CrossOrigin("*")
//@RequestMapping("/payment")
//public class PaymentMomo {
//
//    @Autowired
//    private TransactionRepository transactionRepository;
//
//    @Autowired
//    private CustomerService customerService;
//
//    @PostMapping("/get-urlpayment")
//    public ResponsePayment getUrlPayment(@RequestBody PaymentDto paymentDto){
//        String orderId = String.valueOf(System.currentTimeMillis());
//        String requestId = String.valueOf(System.currentTimeMillis());
//        Environment environment = Environment.selectEnv("dev");
//        PaymentResponse captureATMMoMoResponse = null;
//        try {
//            captureATMMoMoResponse = CreateOrderMoMo.process(environment, orderId, requestId, Long.toString(paymentDto.getAmount()), paymentDto.getContent(), paymentDto.getReturnUrl(), paymentDto.getNotifyUrl(), "", RequestType.PAY_WITH_ATM, null);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        System.out.println("url ====: "+captureATMMoMoResponse.getPayUrl());
//        ResponsePayment responsePayment = new ResponsePayment(captureATMMoMoResponse.getPayUrl(),orderId,requestId);
//        return responsePayment;
//    }
//
//    @PostMapping("/checkPayment")
//    public Integer checkPayment(@RequestBody OrderDto orderDto) throws Exception {
//        Customer customer = customerService.getCustomerByUsername("leminh");
//
//        // da ton tai, khong ghi vao nua
//        if(transactionRepository.findByOrderIdAndRequestId(orderDto.getOrderId(), orderDto.getRequestId()).isPresent()){
//            return 2;
//        }
//
//        Environment environment = Environment.selectEnv("dev");
//        QueryStatusTransactionResponse queryStatusTransactionResponse = QueryTransactionStatus.process(environment, orderDto.getOrderId(), orderDto.getRequestId());
//        System.out.println("qqqq-----------------------------------------------------------"+queryStatusTransactionResponse.getMessage());
//        if(queryStatusTransactionResponse.getResultCode() == 0){
//            Transaction transaction = new Transaction();
//            transaction.setAmount(orderDto.getAmount());
//            transaction.setCustomer(customer);
//            transaction.setStatus(true);
//            transaction.setOrderId(orderDto.getOrderId());
//            transaction.setRequestId(orderDto.getRequestId());
//            transaction.setCreateDate(new Date(System.currentTimeMillis()));
//            transactionRepository.save(transaction);
//            return 0;
//        }
//        return 1;
//    }
//}
