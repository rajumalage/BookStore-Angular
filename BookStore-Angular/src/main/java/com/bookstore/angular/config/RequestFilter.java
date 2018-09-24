package com.bookstore.angular.config;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class RequestFilter implements Filter{
	static final String ORIGIN = "Origin";
	
	public void doFilter(ServletRequest req, ServletResponse res,FilterChain chain){
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) res;
		
		String origin = request.getHeader(ORIGIN);
		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
		response.setHeader("Access-Control-Allow-Headers","x-requested-with, x-auth-token");
		response.setHeader("Access-Control-Max-Age", "1728000");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Headers", "content-type, authorization,WWW-Authenticate");
		
		
		if(!(request.getMethod().equalsIgnoreCase("OPTIONS"))) {
			try {
				chain.doFilter(req, res);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			System.out.println("Pre-fight");
			response.setHeader("Access-Control-Allowed-Methods","POST, GET, DELETE");
			response.setHeader("Access-Control-Max-Age", "1728000");
			response.setHeader("Access-Control-Allow-Headers", "authorization, content-type, x-auth-token, " +
                    "access-control-request-headers,access-control-request-method,accept,origin,authorization,x-requested-with,WWW-Authenticate");
			response.setStatus(HttpServletResponse.SC_OK);

		}
	}
	
public void init(FilterConfig filterConfig) {}
	
	public void destroy() {}


}
