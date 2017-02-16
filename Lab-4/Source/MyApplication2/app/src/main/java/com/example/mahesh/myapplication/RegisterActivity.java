package com.example.mahesh.myapplication;

/**
 * Created by Mahesh on 15-02-2017.
 */


import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class RegisterActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Set View to register.xml
        setContentView(R.layout.register);

        TextView loginScreen = (TextView) findViewById(R.id.link_to_login);

        // Listening to Login Screen link
        loginScreen.setOnClickListener(new View.OnClickListener() {

            public void onClick(View arg0) {
                // Switching to Login Screen/closing register screen
                finish();
            }
        });
    }
    public void log()  {
        Intent redirect = new Intent(RegisterActivity.this, LoginActivity.class);
        startActivity(redirect);
    }

    }
