goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____4817 = reader;

if(cljs.core.truth_(and__3546__auto____4817))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____4817;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____4818 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4818))
{return or__3548__auto____4818;
} else
{var or__3548__auto____4819 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____4819))
{return or__3548__auto____4819;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____4820 = reader;

if(cljs.core.truth_(and__3546__auto____4820))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____4820;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____4821 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4821))
{return or__3548__auto____4821;
} else
{var or__3548__auto____4822 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____4822))
{return or__3548__auto____4822;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__4823 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4823.buffer_atom))))
{var idx__4824 = cljs.core.deref.call(null,this__4823.index_atom);

cljs.core.swap_BANG_.call(null,this__4823.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__4823.s,idx__4824);
} else
{var buf__4825 = cljs.core.deref.call(null,this__4823.buffer_atom);

cljs.core.swap_BANG_.call(null,this__4823.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4825);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__4826 = this;
return cljs.core.swap_BANG_.call(null,this__4826.buffer_atom,(function (p1__4816_SHARP_){
return cljs.core.cons.call(null,ch,p1__4816_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____4827 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____4827))
{return or__3548__auto____4827;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____4828 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____4828))
{return or__3548__auto____4828;
} else
{var and__3546__auto____4830 = (function (){var or__3548__auto____4829 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____4829))
{return or__3548__auto____4829;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____4830))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4831 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__4831);
return next_ch__4831;
})());
} else
{return and__3546__auto____4830;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__4832){
var rdr = cljs.core.first(arglist__4832);
var msg = cljs.core.rest(arglist__4832);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4833 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____4833))
{var and__3546__auto____4834 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____4834))
{var and__3546__auto____4835 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____4835))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____4835;
}
} else
{return and__3546__auto____4834;
}
} else
{return and__3546__auto____4833;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4836 = (new goog.string.StringBuffer(initch));
var ch__4837 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4838 = cljs.core.nil_QMARK_.call(null,ch__4837);

if(cljs.core.truth_(or__3548__auto____4838))
{return or__3548__auto____4838;
} else
{var or__3548__auto____4839 = cljs.reader.whitespace_QMARK_.call(null,ch__4837);

if(cljs.core.truth_(or__3548__auto____4839))
{return or__3548__auto____4839;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4837);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__4837);
return sb__4836.toString();
} else
{{
var G__4840 = (function (){sb__4836.append(ch__4837);
return sb__4836;
})();
var G__4841 = cljs.reader.read_char.call(null,rdr);
sb__4836 = G__4840;
ch__4837 = G__4841;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__4842 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____4843 = cljs.core._EQ_.call(null,ch__4842,"n");

if(cljs.core.truth_(or__3548__auto____4843))
{return or__3548__auto____4843;
} else
{var or__3548__auto____4844 = cljs.core._EQ_.call(null,ch__4842,"r");

if(cljs.core.truth_(or__3548__auto____4844))
{return or__3548__auto____4844;
} else
{return cljs.core.nil_QMARK_.call(null,ch__4842);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__4845 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__4846 = cljs.core.nth.call(null,groups__4845,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____4847 = (void 0 === group3__4846);

if(cljs.core.truth_(or__3548__auto____4847))
{return or__3548__auto____4847;
} else
{return (group3__4846.length < 1);
}
})())))
{return 0;
} else
{var negate__4849 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__4845,1)))?-1:1);
var vec__4848__4850 = (cljs.core.truth_(cljs.core.nth.call(null,groups__4845,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4845,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4845,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4845,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4845,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4845,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4845,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4845,7),parseInt.call(null,cljs.core.nth.call(null,groups__4845,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__4851 = cljs.core.nth.call(null,vec__4848__4850,0,null);
var radix__4852 = cljs.core.nth.call(null,vec__4848__4850,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__4851)))
{return null;
} else
{return (negate__4849 * parseInt.call(null,n__4851,radix__4852));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4853 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__4854 = cljs.core.nth.call(null,groups__4853,1);
var denominator__4855 = cljs.core.nth.call(null,groups__4853,2);

return (parseInt.call(null,numinator__4854) / parseInt.call(null,denominator__4855));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__4856 = cljs.reader.read_char.call(null,reader);
var mapresult__4857 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__4856);

if(cljs.core.truth_(mapresult__4857))
{return mapresult__4857;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4858 = cljs.core._EQ_.call(null,"u",ch__4856);

if(cljs.core.truth_(or__3548__auto____4858))
{return or__3548__auto____4858;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4856);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__4856);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__4856);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4859 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__4859)))
{{
var G__4860 = cljs.reader.read_char.call(null,rdr);
ch__4859 = G__4860;
continue;
}
} else
{return ch__4859;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4861 = cljs.core.Vector.fromArray([]);

while(true){
var ch__4862 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__4862))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__4862)))
{return a__4861;
} else
{var temp__3695__auto____4863 = cljs.core.get.call(null,cljs.reader.macros,ch__4862);

if(cljs.core.truth_(temp__3695__auto____4863))
{var macrofn__4864 = temp__3695__auto____4863;

var mret__4865 = macrofn__4864.call(null,rdr,ch__4862);

{
var G__4867 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__4865,rdr))?a__4861:cljs.core.conj.call(null,a__4861,mret__4865));
a__4861 = G__4867;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4862);
var o__4866 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__4868 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__4866,rdr))?a__4861:cljs.core.conj.call(null,a__4861,o__4866));
a__4861 = G__4868;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__4869 = cljs.reader.read_char.call(null,rdr);
var dm__4870 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__4869);

if(cljs.core.truth_(dm__4870))
{return dm__4870.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4869);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__4871 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4871))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4871);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4872 = (new goog.string.StringBuffer(initch));
var ch__4873 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4874 = cljs.core.nil_QMARK_.call(null,ch__4873);

if(cljs.core.truth_(or__3548__auto____4874))
{return or__3548__auto____4874;
} else
{var or__3548__auto____4875 = cljs.reader.whitespace_QMARK_.call(null,ch__4873);

if(cljs.core.truth_(or__3548__auto____4875))
{return or__3548__auto____4875;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__4873);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4873);
var s__4876 = buffer__4872.toString();

var or__3548__auto____4877 = cljs.reader.match_number.call(null,s__4876);

if(cljs.core.truth_(or__3548__auto____4877))
{return or__3548__auto____4877;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4876,"]");
}
} else
{{
var G__4878 = (function (){buffer__4872.append(ch__4873);
return buffer__4872;
})();
var G__4879 = cljs.reader.read_char.call(null,reader);
buffer__4872 = G__4878;
ch__4873 = G__4879;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__4880 = (new goog.string.StringBuffer());
var ch__4881 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4881)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__4881)))
{{
var G__4882 = (function (){buffer__4880.append(cljs.reader.escape_char.call(null,buffer__4880,reader));
return buffer__4880;
})();
var G__4883 = cljs.reader.read_char.call(null,reader);
buffer__4880 = G__4882;
ch__4881 = G__4883;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__4881)))
{return buffer__4880.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__4884 = (function (){buffer__4880.append(ch__4881);
return buffer__4880;
})();
var G__4885 = cljs.reader.read_char.call(null,reader);
buffer__4880 = G__4884;
ch__4881 = G__4885;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__4886 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__4886,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4886,0,token__4886.indexOf("/")),cljs.core.subs.call(null,token__4886,(token__4886.indexOf("/") + 1),token__4886.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4886,cljs.core.symbol.call(null,token__4886));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4888 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__4887__4889 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__4888);
var token__4890 = cljs.core.nth.call(null,vec__4887__4889,0,null);
var ns__4891 = cljs.core.nth.call(null,vec__4887__4889,1,null);
var name__4892 = cljs.core.nth.call(null,vec__4887__4889,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____4894 = (function (){var and__3546__auto____4893 = cljs.core.not.call(null,(void 0 === ns__4891));

if(cljs.core.truth_(and__3546__auto____4893))
{return (ns__4891.substring((ns__4891.length - 2),ns__4891.length) === ":/");
} else
{return and__3546__auto____4893;
}
})();

if(cljs.core.truth_(or__3548__auto____4894))
{return or__3548__auto____4894;
} else
{var or__3548__auto____4895 = ((name__4892[(name__4892.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____4895))
{return or__3548__auto____4895;
} else
{return cljs.core.not.call(null,(token__4890.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__4890);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__4891.substring(0,ns__4891.indexOf("/")),name__4892);
} else
{return cljs.core.keyword.call(null,token__4890);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__4896 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__4896)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4897 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__445__auto____4898 = o__4897;

if(cljs.core.truth_((function (){var and__3546__auto____4899 = x__445__auto____4898;

if(cljs.core.truth_(and__3546__auto____4899))
{var and__3546__auto____4900 = x__445__auto____4898.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____4900))
{return cljs.core.not.call(null,x__445__auto____4898.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____4900;
}
} else
{return and__3546__auto____4899;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__445__auto____4898);
}
})()))
{return cljs.core.with_meta.call(null,o__4897,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4897),m__4896));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__4901 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4901)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__4901)))
{{
var G__4903 = reader;
var G__4904 = eof_is_error;
var G__4905 = sentinel;
var G__4906 = is_recursive;
reader = G__4903;
eof_is_error = G__4904;
sentinel = G__4905;
is_recursive = G__4906;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__4901)))
{{
var G__4907 = cljs.reader.read_comment.call(null,reader,ch__4901);
var G__4908 = eof_is_error;
var G__4909 = sentinel;
var G__4910 = is_recursive;
reader = G__4907;
eof_is_error = G__4908;
sentinel = G__4909;
is_recursive = G__4910;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__4902 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__4901))?cljs.reader.macros.call(null,ch__4901).call(null,reader,ch__4901):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__4901))?cljs.reader.read_number.call(null,reader,ch__4901):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__4901):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__4902,reader)))
{{
var G__4911 = reader;
var G__4912 = eof_is_error;
var G__4913 = sentinel;
var G__4914 = is_recursive;
reader = G__4911;
eof_is_error = G__4912;
sentinel = G__4913;
is_recursive = G__4914;
continue;
}
} else
{return res__4902;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__4915 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__4915,true,null,false);
});
