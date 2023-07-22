package poly.edu.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDto {
    private String orderId;

    private String requestId;

    private String note;

    private Double amount;
}
