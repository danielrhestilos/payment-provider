import axios from "axios";
import { AuthorizationRequest, AuthorizationResponse, CancellationRequest, CancellationResponse, InboundRequest, InboundResponse, PaymentProvider, RefundRequest, RefundResponse, SettlementRequest, SettlementResponse } from "@vtex/payment-provider";


export default class MyPaymentConnector extends PaymentProvider {

authorize(authorization: AuthorizationRequest): Promise<AuthorizationResponse> {
    console.log(authorization);
    
    throw new Error("Method not implemented.");
}
refund(refund: RefundRequest): Promise<RefundResponse> {
    console.log(refund);
    
    throw new Error("Method not implemented.");
}
settle(settlement: SettlementRequest): Promise<SettlementResponse> {
    console.log(settlement);
    
    throw new Error("Method not implemented.");
}
inbound?(inbound: InboundRequest): Promise<InboundResponse> {
    console.log(inbound);
    
    throw new Error("Method not implemented.");
}

async cancel(cancellation: CancellationRequest): Promise<CancellationResponse> {        
        const options = {
            headers: {
                'X-VTEX-Use-Https': true                
              }
            };
          try {            
            const req = await axios.get('http://emojihub.yurace.pro/api/random', options);
            //Dummy response
            const response: CancellationResponse = {
                message: req.status.toString() || '',
                cancellationId: cancellation.tid,
                code: 'cancel-manually',
                paymentId: cancellation.paymentId
            }
            return response;      
        } catch (error) {
           throw new Error(error.message || '');
        }
       }
}