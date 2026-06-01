import android.app.Activity;
import android.app.Dialog;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.location.LocationManager;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.Window;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.AnimationSet;
import android.view.animation.OvershootInterpolator;
import android.view.animation.ScaleAnimation;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URLEncoder;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import org.json.JSONArray;
import org.json.JSONObject;

boolean fetching=false;
Handler mh;
String cP=""; String cS=""; double cLa=0; double cLn=0;
double cT=0; double cF=0; double cW=0; int cC=0; int cH=0;
int cPz=0; int cV=0; int cCl=0; int cWd=0; double cWg=0; double cU=0;
String cSr=""; String cSs=""; int cHi=0; int cLo=0;
boolean cDy=true; boolean cDn=false;
String[] hTm=new String[6]; int[] hTp=new int[6]; int[] hCd=new int[6];
String[] dTm=new String[7]; int[] dHi=new int[7]; int[] dLo=new int[7];
int[] dCd=new int[7]; double[] dUv=new double[7]; int[] dPc=new int[7];

void onLoad(){ mh=new Handler(Looper.getMainLooper()); toast("\u002F\u5929\u6C14"); }
void onUnload(){}

void onMsg(Object msg){ try { if(!msg.isSend()||!msg.isText())return; String s=msg.content.trim(); if(!cmd(s))return; if(fetching)return; fetching=true; doFetch(cc(s)); tryDel(msg); } catch(Exception e){ fetching=false; } }
void tryDel(Object msg){ try{ java.lang.reflect.Method[] ms=msg.getClass().getMethods(); for(java.lang.reflect.Method m:ms){ String n=m.getName(); if(n.contains("delete")||n.contains("recall")||n.contains("clear")||n.contains("revoke")||n.contains("remove")||n.contains("retract")){ try{ m.invoke(msg); return; }catch(Exception ig){} } } }catch(Exception e){} }
void onCgiRequ(Object data){ try{ int t=0; try{t=(int)data.type;}catch(Exception ig){} String u=""+data.uri; if(t==522&&u.contains("newsendmsg")){ String j=""+data.json; if(j!=null){ try{ org.json.JSONObject root=new org.json.JSONObject(j); String text=root.getJSONObject("2").getString("2"); if(text!=null&&cmd(text)){ java.lang.reflect.Field f=data.getClass().getDeclaredField("json"); f.setAccessible(true); f.set(data,"{}"); if(!fetching){fetching=true;doFetch(cc(text));} } }catch(Exception ig){} } } }catch(Exception e){} }String ext(String j){
    if(j==null)return""; int p=j.indexOf("\u002F\u5929\u6C14"); if(p<0)p=j.indexOf("/tq"); if(p<0)p=j.indexOf("/weather"); if(p<0)return"";
    int e=p; while(e<j.length()){ char ch=j.charAt(e); if(ch==92||ch==34||ch==60||ch==38||ch==32)break; e++; }
    String r=j.substring(p,e).trim(); if(r.equals("\u002F\u5929\u6C14")||r.equals("/tq")||r.equals("/weather"))return r; return"";
}
boolean cmd(String s){
    if(s==null)return false; s=s.trim();
    if(s.equals("\u002F\u5929\u6C14")||s.startsWith("\u002F\u5929\u6C14 "))return true;
    if(s.equals("/tq")||s.startsWith("/tq "))return true;
    if(s.equals("/weather")||s.equals("\u5929\u6C14")||s.equals("\u5F53\u524D\u5929\u6C14"))return true;
    return false;
}
String cc(String s){ if(s==null)return""; s=s.trim(); if(s.startsWith("\u002F\u5929\u6C14 "))return s.substring(4).trim(); if(s.startsWith("/tq "))return s.substring(4).trim(); return""; }

void doFetch(final String ci){ 
    new Thread(new Runnable(){public void run(){ 
        try {
            double la=0,lo=0; String pl="",sc="";
            if(ci!=null&&ci.length()>0){ JSONObject g=gc(ci); la=g.getDouble("latitude"); lo=g.getDouble("longitude"); pl=g.optString("name",ci); String a=g.optString("admin1",""),co=g.optString("country",""); if(a.length()>0&&!pl.equals(a))pl=a+" "+pl; if(co.length()>0)pl=co+" "+pl; sc="\u624B\u52A8"; }
            else { try { JSONObject ip=ipL(); la=ip.getDouble("lat"); lo=ip.getDouble("lon"); pl=ip.getString("city"); String r=ip.optString("regionName",""),co=ip.optString("country",""); if(r.length()>0&&!pl.equals(r))pl=r+" "+pl; if(co.length()>0&&!co.equals(r))pl=co+" "+pl; sc="\u7F51\u7EDC"; } catch(Exception ei){ Location l=gbL(); if(l!=null){ la=l.getLatitude(); lo=l.getLongitude(); pl=rp(la,lo); if(pl.length()==0)pl=String.format(Locale.US,"%.2f,%.2f",la,lo); sc="\u536B\u661F"; } else throw new RuntimeException("no loc"); } }
            String u="http://api.open-meteo.com/v1/forecast?latitude="+la+"&longitude="+lo+"&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,surface_pressure,uv_index,visibility,cloud_cover&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code,uv_index_max,precipitation_probability_max,sunrise,sunset&timezone=auto&forecast_days=7";
            JSONObject ro=new JSONObject(hG(u)); JSONObject cu=ro.getJSONObject("current"); JSONObject da=ro.getJSONObject("daily"); JSONObject ho=ro.getJSONObject("hourly");
            cP=pl; cS=sc; cLa=la; cLn=lo; cT=cu.getDouble("temperature_2m"); cF=cu.optDouble("apparent_temperature",cT);
            cH=cu.optInt("relative_humidity_2m",0); cW=cu.optDouble("wind_speed_10m",0); cC=cu.getInt("weather_code");
            cDy=cu.optInt("is_day",1)==1; cPz=(int)Math.round(cu.optDouble("surface_pressure",0));
            cU=cu.optDouble("uv_index",0); cV=(int)Math.round(cu.optDouble("visibility",0));
            cCl=cu.optInt("cloud_cover",0); cWd=cu.optInt("wind_direction_10m",0); cWg=cu.optDouble("wind_gusts_10m",0);
            cHi=(int)Math.round(da.getJSONArray("temperature_2m_max").getDouble(0));
            cLo=(int)Math.round(da.getJSONArray("temperature_2m_min").getDouble(0));
            cSr=da.getJSONArray("sunrise").getString(0).substring(11,16);
            cSs=da.getJSONArray("sunset").getString(0).substring(11,16);
            fH(ho); fD(da); cDn=true;
            mh.post(new Runnable(){public void run(){ try{sD();}catch(Throwable x){toast("err");} finally{fetching=false;} }});
        } catch(final Throwable e){ mh.post(new Runnable(){public void run(){ sE("\u8BF7\u624B\u52A8\u6307\u5B9A\uFF1A\u002F\u5929\u6C14 \u5317\u4EAC"); fetching=false; }}); }
    }}).start();
}

JSONObject ipL()throws Exception{ String u="http://ip-api.com/json/?lang=zh-CN&fields=country,regionName,city,lat,lon"; JSONObject j=new JSONObject(hG(u)); if(!j.optString("city","").equals(""))return j; throw new RuntimeException("ip"); }
JSONObject gc(String ci)throws Exception{ String q=URLEncoder.encode(ci,"UTF-8"); String u="https://geocoding-api.open-meteo.com/v1/search?name="+q+"&count=1&language=zh&format=json"; JSONObject r=new JSONObject(hG(u)); JSONArray a=r.getJSONArray("results"); if(a.length()==0)throw new RuntimeException("city"); return a.getJSONObject(0); }
Location gbL(){ try{ Activity a=(Activity)getTopActivity(); if(a==null)return null; LocationManager lm=(LocationManager)a.getSystemService("location"); if(lm==null)return null; List ps=lm.getProviders(true); Location b=null; for(int i=0;i<ps.size();i++){ try{ String p=(String)ps.get(i); Location l=lm.getLastKnownLocation(p); if(l==null)continue; if(b==null||l.getTime()>b.getTime())b=l; }catch(Exception ig){} } return b; }catch(Exception e){return null;} }
String rp(double la,double lo){ try{ Activity a=(Activity)getTopActivity(); Geocoder g=new Geocoder(a,Locale.CHINESE); List li=g.getFromLocation(la,lo,1); if(li==null||li.size()==0)return""; Address ad=(Address)li.get(0); String o=""; if(ad.getCountryName()!=null)o+=ad.getCountryName(); if(ad.getAdminArea()!=null&&!ad.getAdminArea().equals(ad.getCountryName()))o+=" "+ad.getAdminArea(); if(ad.getLocality()!=null&&!ad.getLocality().equals(ad.getAdminArea()))o+=" "+ad.getLocality(); return o.trim(); }catch(Exception e){return"";} }
void fH(JSONObject ho)throws Exception{ JSONArray ti=ho.getJSONArray("time"),tp=ho.getJSONArray("temperature_2m"),cd=ho.getJSONArray("weather_code"); int s=0; int nH=Integer.parseInt(new SimpleDateFormat("HH",Locale.US).format(new Date())); for(int i=0;i<ti.length();i++){ int h=Integer.parseInt(ti.getString(i).substring(11,13)); if(h>=nH){s=i;break;} } for(int j=0;j<6;j++){ int i=s+j; if(i>=ti.length())i=ti.length()-1; hTm[j]=(j==0)?"\u73B0\u5728":ti.getString(i).substring(11,16); hTp[j]=(int)Math.round(tp.getDouble(i)); hCd[j]=cd.getInt(i); } }
void fD(JSONObject da)throws Exception{ JSONArray ti=da.getJSONArray("time"),mx=da.getJSONArray("temperature_2m_max"),mn=da.getJSONArray("temperature_2m_min"),cd=da.optJSONArray("weather_code"),uv=da.optJSONArray("uv_index_max"),pc=da.optJSONArray("precipitation_probability_max"); int co=7; if(ti.length()<co)co=ti.length(); for(int i=0;i<co;i++){ dTm[i]=ti.getString(i).substring(5); dHi[i]=(int)Math.round(mx.getDouble(i)); dLo[i]=(int)Math.round(mn.getDouble(i)); dCd[i]=cd!=null?cd.getInt(i):0; dUv[i]=uv!=null?uv.getDouble(i):0; dPc[i]=pc!=null?pc.getInt(i):0; } }
String hG(String u)throws Exception{ HttpURLConnection c=(HttpURLConnection)(new URL(u)).openConnection(); c.setRequestMethod("GET"); c.setConnectTimeout(7000); c.setReadTimeout(7000); c.setRequestProperty("User-Agent","Mozilla/5.0"); BufferedReader r=new BufferedReader(new InputStreamReader(c.getInputStream(),"UTF-8")); StringBuilder sb=new StringBuilder(); String l; while((l=r.readLine())!=null)sb.append(l); r.close(); c.disconnect(); return sb.toString(); }

String em(int c,boolean d){ if(c==0)return d?"\u2600\uFE0F":"\uD83C\uDF19"; if(c<=3)return d?"\u26C5":"\u2601\uFE0F"; if(c<=48)return"\uD83C\uDF2B\uFE0F"; if(c<=65)return"\uD83C\uDF27\uFE0F"; if(c<=75)return"\uD83C\uDF28\uFE0F"; if(c<=82)return"\u26C8\uFE0F"; return"\uD83C\uDF29\uFE0F"; }
String ds(int c){ if(c==0)return"\u6674"; if(c==1)return"\u5C11\u4E91"; if(c==2)return"\u591A\u4E91"; if(c==3)return"\u9634"; if(c<=48)return"\u96FE"; if(c<=55)return"\u6BDB\u6BDB\u96E8"; if(c<=65)return"\u96E8"; if(c<=75)return"\u96EA"; if(c<=82)return"\u9635\u96E8"; return"\u96F7\u66B4"; }
String wd(int d){ if(d<0)return"--"; String[]a={"\u5317","\u5317\u504F\u4E1C","\u4E1C\u5317","\u4E1C\u504F\u5317","\u4E1C","\u4E1C\u504F\u5357","\u4E1C\u5357","\u5357\u504F\u4E1C","\u5357","\u5357\u504F\u897F","\u897F\u5357","\u897F\u504F\u5357","\u897F","\u897F\u504F\u5317","\u897F\u5317","\u5317\u504F\u897F"}; return a[((int)Math.round(d/22.5))%16]; }
String uv(double u){ if(u<3)return"\u4F4E"; if(u<6)return"\u4E2D"; if(u<8)return"\u9AD8"; if(u<11)return"\u5F88\u9AD8"; return"\u6781\u9AD8"; }
String tp(int c,double t){ if(c==0&&t>31)return"\u2600\uFE0F \u9633\u5149\u5F88\u8DB3\uFF0C\u8865\u6C34\u9632\u6652"; if(c==0)return"\u2600\uFE0F \u9002\u5408\u51FA\u95E8\u8D70\u8D70"; if(c<=3)return"\u2601\uFE0F \u4E91\u5C42\u7565\u591A\uFF0C\u6E29\u548C\u8212\u9002"; if(c<=65)return"\u2614 \u8BB0\u5F97\u5E26\u4F1E\uFF0C\u8DEF\u6ED1\u6162\u884C"; if(c<=75)return"\u2744 \u964D\u96EA\u5929\u6C14\uFF0C\u6CE8\u610F\u4FDD\u6696"; return"\u26A1 \u96F7\u96E8\u5929\u6C14\uFF0C\u51CF\u5C11\u5916\u51FA"; }

// ===== UI =====
void sD(){ 
    Activity a=(Activity)getTopActivity(); if(a==null||a.isFinishing()){return;}
    
    String pl=cP; double t=cT,f=cF,w=cW; int h=cH,co=cC,hi=cHi,lo=cLo;
    int sw=a.getResources().getDisplayMetrics().widthPixels,sh=a.getResources().getDisplayMetrics().heightPixels;
    int P=dp(16,a),cw=(int)(sw*0.90),mhH=(int)(sh*0.84);
    int tp=-570425344,ts=-1728053248,tf=1711276032;
    int ch=1090519039,cb=822083583,cst=570425344;
    int mb=1207959551,ms=671088640;
    int bb=788529152,bfC=1358954495,bk=0;
    Dialog d=new Dialog(a,android.R.style.Theme_Translucent_NoTitleBar); d.requestWindowFeature(Window.FEATURE_NO_TITLE);
    FrameLayout rt=new FrameLayout(a); rt.setBackgroundColor(bk); rt.setOnClickListener(new View.OnClickListener(){public void onClick(View v){d.dismiss();}});
    FrameLayout crd=new FrameLayout(a); GradientDrawable cd=new GradientDrawable(); cd.setShape(GradientDrawable.RECTANGLE); cd.setCornerRadius(dp(22,a)); int[]cg=new int[2];cg[0]=ch;cg[1]=cb; cd.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);cd.setColors(cg); cd.setStroke(dp(2,a),cst); crd.setBackground(cd); crd.setOnClickListener(new View.OnClickListener(){public void onClick(View v){}});
    android.widget.ScrollView sv=new android.widget.ScrollView(a); sv.setFillViewport(true); sv.setVerticalScrollBarEnabled(false);
    LinearLayout m=new LinearLayout(a); m.setOrientation(LinearLayout.VERTICAL); m.setGravity(Gravity.CENTER_HORIZONTAL); m.setPadding(P,dp(20,a),P,dp(24,a));
    // header
    LinearLayout hdr=new LinearLayout(a); hdr.setOrientation(LinearLayout.HORIZONTAL); hdr.setGravity(Gravity.CENTER_VERTICAL);
    TextView loc=tv(a,pl,17,tp,true);
    avw(hdr,loc,1);
    TextView cl=tv(a,"\u2715",24,ts,false); cl.setGravity(Gravity.CENTER); cl.setPadding(dp(8,a),dp(2,a),dp(8,a),dp(2,a));
    av(hdr,cl,-2,-2);
    av(m,hdr,-1,-2);
    // main weather
    m.addView(tv(a,((int)Math.round(t))+"\u00B0",80,tp,true,dp(0,a)));
    m.addView(tv(a,ds(co)+"  "+lo+"\u00B0 / "+hi+"\u00B0",17,ts,true,dp(0,a)));
    // temp bar
    LinearLayout br=new LinearLayout(a);br.setOrientation(LinearLayout.HORIZONTAL);br.setGravity(Gravity.CENTER);
    int bh=dp(3,a),bw=dp(180,a),ra=(hi-lo>0)?(hi-lo):1,ps=(int)(((t-lo)/(double)ra)*bw); if(ps<0)ps=0;if(ps>bw-dp(14,a))ps=bw-dp(14,a);
    LinearLayout bt=new LinearLayout(a);bt.setOrientation(LinearLayout.HORIZONTAL); GradientDrawable btd=new GradientDrawable();btd.setShape(GradientDrawable.RECTANGLE);btd.setCornerRadius(bh);btd.setColor(bb);bt.setBackground(btd);
    View bv=new View(a); GradientDrawable bfd=new GradientDrawable();bfd.setShape(GradientDrawable.RECTANGLE);bfd.setCornerRadius(bh);bfd.setColor(bfC);bv.setBackground(bfd);
    av(bt,bv,ps,bh); avt(br,bt,bw,bh,dp(12,a)); av(m,br,-1,-2);
    // details 1
    m.addView(sh(a,"\u8BE6\u7EC6\u4FE1\u606F",ts));
    LinearLayout r1=ro(a); avw(r1,cll(a,"\u4F53\u611F",((int)Math.round(f))+"\u00B0",ts,tp),1); avw(r1,cll(a,"\u6E7F\u5EA6",h+"%",ts,tp),1); avw(r1,cll(a,"\u98CE\u901F",((int)Math.round(w))+" km/h",ts,tp),1);
    avt(m,r1,-1,-2,dp(16,a));
    // details 2
    LinearLayout r2=ro(a); avw(r2,cll(a,"\u7D2B\u5916\u7EBF",uv(cU)+" "+((int)Math.round(cU)),ts,tp),1); avw(r2,cll(a,"\u6C14\u538B",cPz+" hPa",ts,tp),1); avw(r2,cll(a,"\u80FD\u89C1\u5EA6",cV>0?String.format(Locale.US,"%.1f km",cV/1000.0):"--",ts,tp),1);
    avt(m,r2,-1,-2,dp(6,a));
    // details 3
    LinearLayout r3=ro(a); avw(r3,cll(a,"\u98CE\u5411",wd(cWd),ts,tp),1); avw(r3,cll(a,"\u9635\u98CE",cWg>0?((int)Math.round(cWg))+" km/h":"--",ts,tp),1); avw(r3,cll(a,"\u4E91\u91CF",cCl+"%",ts,tp),1);
    avt(m,r3,-1,-2,dp(6,a));
    // sun
    m.addView(sh(a,"\u65E5\u51FA\u65E5\u843D",ts));
    LinearLayout sr=ro(a); avw(sr,cll(a,"\u2600\uFE0F \u65E5\u51FA",cSr,ts,tp),1); avw(sr,cll(a,"\uD83C\uDF07 \u65E5\u843D",cSs,ts,tp),1);
    avt(m,sr,-1,-2,dp(14,a));
    // hourly
    m.addView(sh(a,"\u9010\u5C0F\u65F6\u9884\u62A5",ts));
    LinearLayout hr=new LinearLayout(a);hr.setOrientation(LinearLayout.HORIZONTAL);hr.setGravity(Gravity.CENTER);
    for(int i=0;i<6;i++)avw(hr,hc(a,hTm[i],em(hCd[i],true),hTp[i]+"\u00B0",tf,tp),1);
    avt(m,hr,-1,-2,dp(14,a));
    // daily
    m.addView(sh(a,"7\u65E5\u9884\u62A5",ts));
    LinearLayout dc=new LinearLayout(a);dc.setOrientation(LinearLayout.VERTICAL); GradientDrawable dg=new GradientDrawable();dg.setShape(GradientDrawable.RECTANGLE);dg.setCornerRadius(dp(18,a)); int[]dgc=new int[2];dgc[0]=mb+67108864;dgc[1]=mb; dg.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);dg.setColors(dgc);dg.setStroke(dp(1,a),ms);dc.setBackground(dg);dc.setPadding(dp(14,a),dp(10,a),dp(14,a),dp(10,a));
    for(int i=0;i<7;i++){
        LinearLayout dr=new LinearLayout(a);dr.setOrientation(LinearLayout.HORIZONTAL);dr.setGravity(Gravity.CENTER_VERTICAL);
        avw(dr,tv(a,dTm[i],13,tp,true),0.20f);
        avw(dr,tv(a,em(dCd[i],true),20,tp,false),0.16f);
        avw(dr,tv(a,dPc[i]+"%",11,tf,false),0.16f);
        avw(dr,tv(a,dLo[i]+"\u00B0 ~ "+dHi[i]+"\u00B0",13,tp,true),0.48f);
        avt(dc,dr,-1,-2,i>0?dp(8,a):0);
    }
    avt(m,dc,-1,-2,dp(14,a));
    // tip
    m.addView(sh(a,"\u4ECA\u65E5\u63D0\u793A",ts));
    m.addView(tv(a,tp(co,t),12,tf,false,dp(8,a)));
    // assembly
    sv.addView(m); crd.addView(sv); rt.addView(crd); d.setContentView(rt);
    
    Window wn=d.getWindow();
    if(wn!=null){wn.setLayout(cw,mhH);wn.setGravity(Gravity.CENTER);wn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(0));if(Build.VERSION.SDK_INT>=31)try{wn.setBackgroundBlurRadius(dp(35,a));}catch(Exception ig){}}
    cl.setOnClickListener(new View.OnClickListener(){public void onClick(View v){d.dismiss();}}); d.show();
}

void sE(String ms){
    Object a=getTopActivity();if(a==null||a.isFinishing()){toast(ms);return;}
    Dialog d=new Dialog(a,android.R.style.Theme_Translucent_NoTitleBar);d.requestWindowFeature(Window.FEATURE_NO_TITLE);
    FrameLayout rt=new FrameLayout(a);rt.setBackgroundColor(0);rt.setOnClickListener(new View.OnClickListener(){public void onClick(View v){d.dismiss();}});
    LinearLayout cd=new LinearLayout(a);cd.setOrientation(LinearLayout.VERTICAL);cd.setGravity(Gravity.CENTER_HORIZONTAL);cd.setPadding(dp(22,a),dp(20,a),dp(22,a),dp(20,a));
    GradientDrawable g=new GradientDrawable();g.setShape(GradientDrawable.RECTANGLE);g.setCornerRadius(dp(20,a));int[]b=new int[2];b[0]=1090519039;b[1]=822083583;g.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);g.setColors(b);g.setStroke(dp(2,a),570425344);cd.setBackground(g);
    cd.addView(tv(a,"\uD83D\uDCCD",38,-570425344,false)); cd.addView(tv(a,"\u65E0\u6CD5\u83B7\u53D6\u4F4D\u7F6E",17,-570425344,true,dp(10,a)));
    cd.addView(tv(a,ms,12,1711276032,false,dp(6,a))); cd.addView(tv(a,"\u8BD5\u8BD5\uFF1A\u002F\u5929\u6C14 \u5317\u4EAC",13,-570425344,true,dp(10,a)));
    rt.addView(cd);d.setContentView(rt);
    Window w=d.getWindow();if(w!=null){w.setLayout((int)(a.getResources().getDisplayMetrics().widthPixels*0.80),-2);w.setGravity(Gravity.CENTER);w.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(0));} d.show();
}

TextView sh(Object act,String s,int c){Activity a=(Activity)act; TextView v=tv(a,s,13,c,true); v.setGravity(Gravity.LEFT|Gravity.CENTER_VERTICAL);v.setPadding(dp(4,a),0,0,0); return v; }
LinearLayout ro(Object act){Activity a=(Activity)act; LinearLayout b=new LinearLayout(a);b.setOrientation(LinearLayout.HORIZONTAL);b.setGravity(Gravity.CENTER); GradientDrawable g=new GradientDrawable();g.setShape(GradientDrawable.RECTANGLE);g.setCornerRadius(dp(18,a)); int[]c=new int[2];c[0]=1207959551+67108864;c[1]=1207959551; g.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);g.setColors(c);g.setStroke(dp(1,a),671088640); b.setBackground(g);b.setPadding(dp(12,a),dp(12,a),dp(12,a),dp(12,a)); return b; }
LinearLayout cll(Object act,String k,String v,int ck,int cv){Activity a=(Activity)act; LinearLayout b=new LinearLayout(a);b.setOrientation(LinearLayout.VERTICAL);b.setGravity(Gravity.CENTER); b.addView(tv(a,k,9,ck,false)); b.addView(tv(a,v,15,cv,true,dp(4,a))); return b; }
LinearLayout hc(Object act,String ti,String e,String tp,int cl,int cv){Activity a=(Activity)act; LinearLayout b=new LinearLayout(a);b.setOrientation(LinearLayout.VERTICAL);b.setGravity(Gravity.CENTER); b.addView(tv(a,ti,8,cl,false)); b.addView(tv(a,e,20,cv,false,dp(5,a))); b.addView(tv(a,tp,14,cv,true,dp(5,a))); return b; }
void avw(LinearLayout p,View v,float wt){LinearLayout.LayoutParams l=new LinearLayout.LayoutParams(0,-2,wt);p.addView(v);v.setLayoutParams(l);} void av(LinearLayout p,View v,int w,int h){LinearLayout.LayoutParams l=new LinearLayout.LayoutParams(w,h);p.addView(v);v.setLayoutParams(l);} void avt(LinearLayout p,View v,int w,int h,int top){LinearLayout.LayoutParams l=new LinearLayout.LayoutParams(w,h);if(top>0)l.topMargin=top;p.addView(v);v.setLayoutParams(l);}
LinearLayout.LayoutParams lp(float w){return new LinearLayout.LayoutParams(0,-2,w);}
LinearLayout.LayoutParams lpm(int w,int h,int top){LinearLayout.LayoutParams p=new LinearLayout.LayoutParams(w,h);if(top>0)p.topMargin=top;return p;}
LinearLayout.LayoutParams lpm(int w,int h){return new LinearLayout.LayoutParams(w,h);}
LinearLayout.LayoutParams lpmw(int w){return new LinearLayout.LayoutParams(w,-2);}
LinearLayout.LayoutParams lpW(float w){return new LinearLayout.LayoutParams(0,-2,w);}
int dp(int v,Object act){Activity a=(Activity)act;return(int)TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,v,a.getResources().getDisplayMetrics());}
TextView tv(Object act,String s,int sp,int color,boolean bold){Activity a=(Activity)act;return tv(a,s,sp,color,bold,0);}
TextView tv(Object act,String s,int sp,int color,boolean bold,int top){Activity a=(Activity)act; TextView v=new TextView(a);v.setText(s);v.setTextSize(TypedValue.COMPLEX_UNIT_SP,sp);v.setTextColor(color);v.setGravity(Gravity.CENTER);if(bold)v.setTypeface(Typeface.DEFAULT,Typeface.BOLD);if(top>0){v.setLayoutParams(lpm(-2,-2,top));} return v; }