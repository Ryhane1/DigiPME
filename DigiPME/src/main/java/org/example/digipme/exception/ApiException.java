package org.example.digipme.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static io.lettuce.core.pubsub.PubSubOutput.Type.message;

@Getter
public class ApiException extends RuntimeException {

    private final HttpStatus status;

    public ApiException(HttpStatus status, String message) {
        super(message);
        this.status = status;
    }

}