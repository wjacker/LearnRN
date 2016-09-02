package com.learnrn.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.learnrn.R;

public class OptionItemView extends LinearLayout {

	private View container;
	private ImageView icon;
	private TextView title;
	private View line;

	public OptionItemView(Context context) {
		this(context, null);
		// TODO Auto-generated constructor stub
	}
	
	public OptionItemView(Context context, AttributeSet attrs) {
		this(context, attrs, 0);
		// TODO Auto-generated constructor stub
	}
	
	public OptionItemView(Context context, AttributeSet attrs, int defStyle) {
		super(context, attrs);
		LayoutInflater inflater=(LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		inflater.inflate(R.layout.option_item_view, this);
		container=findViewById(R.id.option_item_container);
		icon=(ImageView) findViewById(R.id.option_item_icon);
		title=(TextView) findViewById(R.id.option_item_title);
		line=findViewById(R.id.line);
		
		TypedArray mTypedArray=context.obtainStyledAttributes(attrs, R.styleable.optionItem);
		String titleStr=mTypedArray.getString(R.styleable.optionItem_item_title);
		if(!TextUtils.isEmpty(titleStr)){
			title.setText(titleStr);
		}else{
			title.setVisibility(View.GONE);
		}
		
		if(mTypedArray.getDrawable(R.styleable.optionItem_item_title_color)!=null){
			title.setTextColor(mTypedArray.getColor(R.styleable.optionItem_item_title_color,
					Color.BLACK));
		}
		
		if(mTypedArray.getDrawable(R.styleable.optionItem_item_icon)!=null){
			icon.setImageDrawable(mTypedArray.getDrawable(R.styleable.optionItem_item_icon));
		}
		
		if(mTypedArray.getDrawable(R.styleable.optionItem_item_background)!=null){
			container.setBackgroundDrawable(mTypedArray.getDrawable(R.styleable.optionItem_item_background));
		}
		
		mTypedArray.recycle();
	}
	
	
	/**
	 * 设置标题
	 * @param text
	 */
	public void setTitle(String text){
		if(!TextUtils.isEmpty(text)){
			title.setText(text);
			title.setVisibility(View.VISIBLE);
		}
	}
	
	/**
	 * 设置背景
	 * @param resId
	 */
	public void setOptionItemBg(int resId){
		if(resId>=0){
			container.setBackgroundResource(resId);
		}
	}
	
	/**
	 * 设置标题
	 * @param resId
	 */
	public void setOptionItemTitleColor(int resId){
		if(resId>0){
			title.setTextColor(resId);
		}
	}
	
	/**
	 * 设置图标
	 * @param resId
	 */
	public void setIcon(int resId){
		if(resId>0){
			icon.setBackgroundResource(resId);
		}
	}
	
	public void showLine(boolean show){
		line.setVisibility(show?View.VISIBLE:View.INVISIBLE);
	}
	
}
